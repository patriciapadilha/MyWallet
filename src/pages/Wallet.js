import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';
import Expenses from '../components/Expenses';
import { fetchCoins } from '../actions/index';
import './Wallet.css';
import EditExpense from '../components/EditExpense';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      isEdit: false,
    };
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    const { fetchCoinsDispatch } = this.props;
    fetchCoinsDispatch();
  }

  handleEdit() {
    this.setState((prevState) => ({ isEdit: !prevState.isEdit }));
  }

  render() {
    const { isEdit } = this.state;
    return (
      <div>
        <Header />
        { isEdit ? <EditExpense
          handleEdit={ this.handleEdit }
        /> : <Form /> }
        <Expenses handleEdit={ this.handleEdit } />
      </div>
    );
  }
}

Wallet.propTypes = {
  fetchCoinsDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCoinsDispatch: () => dispatch(fetchCoins()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
