// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  isFetching: false,
  error: '',
  errorExchange: '',
  currencies: [],
  expenses: [],
  exchange: {},
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'REQUEST_COINS':
    return { ...state, isFetching: true };
  case 'RECEIVE_COINS':
    return { ...state, currencies: action.payload, isFetching: false };
  case 'FAILED_REQUEST':
    return { ...state, error: action.payload, isFetching: false };
  case 'ADD_EXPENSE_ACTION':
    return { ...state, expenses: action.payload };
  case 'REQUEST_EXCHANGE':
    return { ...state, isFetching: true };
  case 'RECEIVE_EXCHANGE':
    return { ...state, exchange: action.payload, isFetching: false };
  case 'FAILED_REQUEST_EXCHANGE':
    return { ...state, errorExchange: action.payload, isFetching: false };
  default:
    return state;
  }
}

export default walletReducer;
