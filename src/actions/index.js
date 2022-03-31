// Coloque aqui suas actions
export const userAction = (payload) => ({ type: 'USER_ACTION', payload });

const REQUEST_COINS = 'REQUEST_COINS';
const RECEIVE_COINS = 'RECEIVE_COINS';
const FAILED_REQUEST = 'FAILED_REQUEST';

const requestCoins = () => ({
  type: REQUEST_COINS });

const receiveCoins = (payload) => ({
  type: RECEIVE_COINS,
  payload });

const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error });

export function fetchCoins() {
  return async (dispatch) => {
    dispatch(requestCoins());
    try {
      const resolve = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await resolve.json();
      const arrayData = Object.keys(data);
      const filteredData = arrayData.filter((coin) => coin !== 'USDT');
      console.log(filteredData);
      dispatch(receiveCoins(filteredData));
    } catch (error) {
      dispatch(failedRequest(error));
    }
  };
}
