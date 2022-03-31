import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    console.log(this.props);
    return (
      <header>
        <h3 data-testid="email-field">{ email }</h3>
        <p>Despesa total:</p>
        <p>R$</p>
        <p data-testid="total-field">Valor inicial 0</p>
        <p data-testid="header-currency-field">BRL</p>
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
