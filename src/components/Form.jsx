import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor
          <input
            data-testid="value-input"
            type="number"
            id="valor"
          />
        </label>
        <label htmlFor="descricao">
          Descrição
          <input
            data-testid="description-input"
            type="text"
            id="descricao"
          />
        </label>
        <label htmlFor="moeda">
          Moeda
          <select id="moeda">
            {currencies.map(
              (coin, key) => <option key={ key } value={ coin }>{ coin }</option>,
            )}
          </select>
        </label>
        <label htmlFor="pagamento">
          Método de pagamento
          <select data-testid="method-input" id="pagamento">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select data-testid="tag-input" id="tag">
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Form);
