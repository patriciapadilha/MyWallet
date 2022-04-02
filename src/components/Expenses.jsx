import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Expenses extends React.Component {
  render() {
    const { expenses } = this.props;
    // console.log(expenses);
    // console.log(expenses.length > 0 && expenses[0].currency);
    // console.log(expenses.length > 0 && expenses[0].exchangeRates);
    // console.log(expenses.length > 0 && expenses[0].exchangeRates[expenses[0].currency]);
    // console.log(expenses.length > 0 && expenses[0].exchangeRates[expenses[0].currency].ask);

    return (
      <section>
        <div className="hearder-expenses">
          <p>Valor</p>
          <p>Descrição</p>
          <p>Moeda</p>
          <p>Cambio</p>
          <p>Método de pagamento</p>
          <p>Tag</p>
        </div>
        {expenses.map((expense, key) => (
          <div key={ key } className="expense">
            <p>{ expense.value }</p>
            <p>{ expense.description }</p>
            <p>{ expense.currency }</p>
            <p>{ expense.exchangeRates[expense.currency].ask }</p>
            <p>{ expense.method }</p>
            <p>{ expense.tag }</p>
            <div className="buttons">
              <button type="button">Editar</button>
              <button type="button">Excluir</button>
            </div>
          </div>
        ))}
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
