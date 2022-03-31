import React from 'react';
import PropTypes from 'prop-types';
import { GiMoneyStack } from 'react-icons/gi';
import { connect } from 'react-redux';
import { userAction } from '../actions/index';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      senha: '',
      isValidate: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.validateForms = this.validateForms.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.validateForms());
  }

  validateForms() {
    const { email, senha } = this.state;
    const validEmail = new RegExp(
      '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$',
    );
    const minLength = 6;
    const passValidate = senha.length >= minLength;
    const emailValidate = email.length > 0 && validEmail.test(email);

    if (emailValidate && passValidate) {
      this.setState({ isValidate: true });
    } else {
      this.setState({ isValidate: false });
    }
  }

  render() {
    const { email, senha, isValidate } = this.state;
    const { history, addUser } = this.props;
    return (
      <form>
        <GiMoneyStack size={ 100 } color="#90be6d" className="item" />
        <h1 className="item">Acessar MyWallet</h1>
        <label htmlFor="email">
          <input
            type="email"
            id="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            placeholder="Email"
            data-testid="email-input"
            className="item"
          />
        </label>
        <label htmlFor="senha">
          <input
            type="password"
            id="senha"
            name="senha"
            value={ senha }
            onChange={ this.handleChange }
            placeholder="Senha"
            data-testid="password-input"
            className="item"
          />
        </label>
        <button
          type="button"
          onClick={ () => { addUser(email); history.push('/carteira'); } }
          disabled={ !isValidate }
          className="item"
        >
          Entrar
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  addUser: PropTypes.func,
  history: PropTypes.object,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  addUser: (payload) => dispatch(userAction(payload)),
});

export default connect(null, mapDispatchToProps)(Login);
