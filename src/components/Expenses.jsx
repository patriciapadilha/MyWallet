import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Expenses extends React.Component {
  render() {
    const { expenses } = this.props;
    console.log(expenses);
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
        {/* {expenses.map((expense, key) => (
          <div key={ key } className="expense">
            <p>{ expense.valor }</p>
            <p>{ expense.descricao }</p>
            <p>{ expense.moeda }</p>
            <p>{ expense.pagamento }</p>
            <p>{ expense.tag }</p>
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
