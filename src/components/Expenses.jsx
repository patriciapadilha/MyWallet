import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteAction, editAction } from '../actions/index';

class Expenses extends React.Component {
  constructor() {
    super();
    this.editClickButton = this.editClickButton.bind(this);
  }

  editClickButton(id, exchangeRates) {
    const { editExpenseDispatch, handleEdit } = this.props;
    handleEdit();
    editExpenseDispatch(id, exchangeRates);
  }

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
                  <button
                    type="button"
                    data-testid="edit-btn"
                    onClick={ () => this.editClickButton(e.id, e.exchangeRates) }
                  >
                    Editar
                  </button>
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
  editExpenseDispatch: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpenseDispatch: (payload) => dispatch(deleteAction(payload)),
  editExpenseDispatch: (id, exchangeRates) => dispatch(editAction(id, exchangeRates)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Expenses);
