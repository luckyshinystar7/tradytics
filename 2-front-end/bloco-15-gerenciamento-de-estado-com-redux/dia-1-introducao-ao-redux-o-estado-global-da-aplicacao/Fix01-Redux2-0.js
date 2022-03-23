const Redux = require('redux');

const INITIAL_STATE = { 
  login: false,
  email: '',
}

const reducer = (state = INITIAL_STATE) => {
  return state;
};

const store = Redux.createStore(reducer);

console.log(store.getState());
