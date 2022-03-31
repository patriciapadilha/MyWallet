import React from 'react';
import { GiMoneyStack } from 'react-icons/gi';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    console.log(this.props);
    return (
      <header>
        <GiMoneyStack size={ 100 } color="#90be6d" className="money-item" />
        <h3 data-testid="email-field">{ email }</h3>
        <div className="total-field">
          <p>Despesa total:</p>
          <p>R$</p>
          <p data-testid="total-field">Valor inicial 0</p>
          <p data-testid="header-currency-field">BRL</p>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps, null)(Header);
