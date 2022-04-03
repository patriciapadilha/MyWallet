import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Expenses extends React.Component {
  render() {
    const { expenses } = this.props;
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
          {expenses.map((e, key) => (
            <tr key={ key }>
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
                <button type="button">Excluir</button>
              </td>
            </tr>
          ))}
        </table>
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
