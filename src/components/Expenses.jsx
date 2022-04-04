import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteAction } from '../actions/index';

class Expenses extends React.Component {
  // constructor() {
  //   super();
  //   this.handleDelete = this.handleDelete.bind(this);
  // }

  // handleDelete(id) {
  //   const { expenses } = this.props;
  //   console.log('clicou no', id);
  //   const expensesFiltered = expenses.filter((expense) => expense.id !== id);
  //   console.log(expensesFiltered);
  // }

  render() {
    const { expenses, deleteExpenseDispatch } = this.props;
    console.log(expenses);
    return (
      <section>
        <table>
          <thead>
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
          </thead>
          <tbody>
            {expenses.map((e) => (
              <tr key={ e.id }>
                <td>{ e.description }</td>
                <td>{ e.tag }</td>
                <td>{ e.method }</td>
                <td>{ Number(e.value).toFixed(2)}</td>
                <td>{ e.exchangeRates[e.currency].name.split('/Real Brasileiro') }</td>
                <td>{ Number(e.exchangeRates[e.currency].ask).toFixed(2)}</td>
                <td>
                  {(Number(e.value) * Number(e.exchangeRates[e.currency].ask)).toFixed(2)}
                </td>
                <td>Real</td>
                <td>
                  <button type="button">Editar</button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    onClick={ () => deleteExpenseDispatch(e.id) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpenseDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpenseDispatch: (payload) => dispatch(deleteAction(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
