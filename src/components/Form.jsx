import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addExpenseAction, fetchExchange } from '../actions';
// import { fetchExchange } from '../actions';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      valor: 0,
      descricao: '',
      moeda: 'USD',
      pagamento: 'Dinheiro',
      tag: 'Alimentação',
      // exchangeRates: {},
      expenses: [],
      // totalValue: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.addExpense = this.addExpense.bind(this);
  }

  addExpense(expenseObj) {
    const { addExpenseDispatch, fetchExchangeDispatch } = this.props;
    this.setState((previousState) => {
      const newExpense = [...previousState.expenses, expenseObj];
      return {
        expenses: newExpense,
        id: previousState.id + 1,
      };
    }, () => {
      const { expenses } = this.state;
      fetchExchangeDispatch();
      addExpenseDispatch(expenses);
    });
  }

  // addExpense = () => {
  //   const { addExpenseDispatch } = this.props;
  //   this.setState((prevState) => ({
  //     id: prevState.id + 1,
  //   }));
  //   addExpenseDispatch(this.state);
  // }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { currencies } = this.props;
    const { id, valor, descricao, moeda, pagamento, tag } = this.state;
    return (
      <form className="form-wallet">
        <label htmlFor="valor">
          Valor
          <input
            data-testid="value-input"
            type="number"
            id="valor"
            name="valor"
            value={ valor }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            data-testid="description-input"
            type="text"
            id="descricao"
            name="descricao"
            value={ descricao }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda" name="moeda" value={ moeda } onChange={ this.handleChange }>
            {currencies.map(
              (coin, key) => <option key={ key } value={ coin }>{ coin }</option>,
            )}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select
            data-testid="method-input"
            id="pagamento"
            name="pagamento"
            value={ pagamento }
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
          onClick={ () => this.addExpense({
            id,
            valor,
            descricao,
            moeda,
            pagamento,
            tag,
          }) }
          // onClick={ this.addExpense }
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
  fetchExchangeDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  exchange: state.wallet.exchange,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenseDispatch: (payload) => dispatch(addExpenseAction(payload)),
  // addExpenseDispatch: (expenses) => dispatch(fetchExchange(expenses)),
  fetchExchangeDispatch: () => dispatch(fetchExchange()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
