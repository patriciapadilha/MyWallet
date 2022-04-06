import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeEditAction } from '../actions/index';

class EditExpense extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
    this.hanbleChangeEdit = this.hanbleChangeEdit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  hanbleChangeEdit() {
    const { handleEdit, changeEditActionDispatch } = this.props;
    handleEdit();
    changeEditActionDispatch(this.state);
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
        <label htmlFor="currency">
          Moeda
          <select
            id="currency"
            name="currency"
            value={ currency }
            onChange={ this.handleChange }
            data-testid="currency-input"
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
          Categoria
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
        <button
          type="button"
          onClick={ this.hanbleChangeEdit }
        >
          Editar despesa
        </button>
      </form>
    );
  }
}

EditExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleEdit: PropTypes.func.isRequired,
  // expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeEditActionDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  changeEditActionDispatch: (payload) => dispatch(changeEditAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);
