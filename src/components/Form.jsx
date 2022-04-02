import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { addExpenseAction, fetchExchange } from '../actions';
import { fetchExchange } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addExpense = this.addExpense.bind(this);
  }

  // addExpense(expenseObj) {
  //   const { addExpenseDispatch } = this.props;
  //   this.setState((previousState) => {
  //     const newExpense = [...previousState.expenses, expenseObj];
  //     return {
  //       expenses: newExpense,
  //       id: previousState.id + 1,
  //     };
  //   }, () => {
  //     const { expenses } = this.state;
  //     // fetchExchangeDispatch();
  //     addExpenseDispatch(expenses);
  //   });
  // }

  addExpense = () => {
    const { addExpenseDispatch } = this.props;
    this.setState((prevState) => ({
      id: prevState.id + 1,
    }));
    // const { currency } = this.state;
    addExpenseDispatch(this.state);
    this.setState({
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <form className="form-wallet">
        <label htmlFor="value">
          Valor
          <input
            data-testid="value-input"
            type="number"
            id="value"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            data-testid="description-input"
            type="text"
            id="description"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
          >
            {currencies.map(
              (coin, key) => <option key={ key } value={ coin }>{ coin }</option>,
            )}
          </select>
        </label>
        <label htmlFor="method">
          Método de pagamento
          <select
            data-testid="method-input"
            id="method"
            name="method"
            value={ method }
            onChange={ this.handleChange }
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select
            data-testid="tag-input"
            id="tag"
            name="tag"
            value={ tag }
            onChange={ this.handleChange }
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <button
          type="button"
          // onClick={ () => this.addExpense({
          //   id,
          //   valor,
          //   descricao,
          //   moeda,
          //   pagamento,
          //   tag,
          // }) }
          onClick={ this.addExpense }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  addExpenseDispatch: PropTypes.func.isRequired,
  // fetchExchangeDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenseDispatch: (expenses) => dispatch(fetchExchange(expenses)),
  // fetchExchangeDispatch: () => dispatch(fetchExchange()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
