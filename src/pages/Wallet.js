import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Form from '../components/Form';
import Expenses from '../components/Expenses';
import { fetchCoins } from '../actions/index';
import './Wallet.css';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetchCoinsDispatch } = this.props;
    fetchCoinsDispatch();
  }

  render() {
    return (
      <div>
        <Header />
        <Form />
        <Expenses />
      </div>
    );
  }
}

Wallet.propTypes = {
  fetchCoinsDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  fetchCoinsDispatch: () => dispatch(fetchCoins()),
});

export default connect(null, mapDispatchToProps)(Wallet);
