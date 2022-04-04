// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  error: '',
  errorExchange: '',
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'REQUEST_COINS':
    return { ...state };
  case 'RECEIVE_COINS':
    return { ...state, currencies: action.payload };
  case 'FAILED_REQUEST':
    return { ...state, error: action.payload };
  case 'REQUEST_EXCHANGE':
    return { ...state };
  case 'RECEIVE_EXCHANGE':
    return { ...state, expenses: [...state.expenses, action.payload] };
  case 'FAILED_REQUEST_EXCHANGE':
    return { ...state, errorExchange: action.payload };
  case 'DELETE_ACTION':
    return { ...state,
      expenses: state.expenses.filter(
        (expense) => expense.id !== action.payload,
      ) };
  default:
    return state;
  }
}

export default walletReducer;
