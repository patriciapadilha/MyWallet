import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Expenses extends React.Component {
  render() {
    const { expenses } = this.props;
    return (
      <section>
        <table>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </table>
        {/* {expenses.map((expense, key) => (
          <div key={ key } className="expense">
            <p>{ expense.description }</p>
            <p>{ expense.tag }</p>
            <p>{ expense.method }</p>
            <p>{ expense.value }</p>
            <p>{ expense.currency }</p>
            <p>{ expense.exchangeRates[expense.currency].name }</p>
            <p>
              { Number(expense.value) * Number(expense.exchangeRates[expense.currency].ask) }
            </p>
            <p>{ expense.exchangeRates[expense.currency].codein }</p>
            <div className="buttons">
              <button type="button">Editar</button>
              <button type="button">Excluir</button>
            </div>
          </div>
        ))} */}
      </section>
    );
  }
}

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Expenses);
