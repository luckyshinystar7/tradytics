const Redux = require('redux');

const ESTADO_INICIAL = {
    login: false,
    email: "",
  };
  
  const reducer = (state = ESTADO_INICIAL) => {
    return state;
  };
  
  const store = Redux.createStore(reducer);
  
  console.log(store.getState());
  
  //{ login: false, email: '' }
