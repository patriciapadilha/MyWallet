// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  error: '',
  errorExchange: '',
  currencies: [],
  expenses: [],
  id: '',
  exchange: {},
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
  case 'EDIT_ACTION':
    // console.log(action.exchangeRates);
    // console.log(action.id);
    return { ...state,
      id: action.id,
      exchange: action.exchangeRates,
    };
  case 'CHANGE_EDIT_ACTION': {
    state.expenses[state.id] = {
      id: state.id,
      ...action.payload,
      exchangeRates: state.exchange };
    return { ...state,
      expenses: [...state.expenses],
    };
  }
  default:
    return state;
  }
}

export default walletReducer;
