const Redux = require('redux');

const fazLogin = (email) => ({
  type: 'LOGIN',
  email,
})

const INITIAL_STATE = {
  login: false,
  email: '',
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
      default:
        return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(fazLogin("email@email.com.br"));

console.log(store.getState());

// Utilizando Combine Reducer e Subscribe
import { combineReducers, createStore } from 'redux';

const rootReducer = combineReducers({
  meuReducer,
  outroReducer,
});

const store = createStore(rootReducer);

// ATENÇÃO - AO ACESSAR UM STORE QUE UTILIZA UM COMBINE REDUCER, LEMBRAR DE ESPECIFICAR O REDUCER NA BUSCA ex: state.MEUREDUCER.email e nao state.email
//{
// meuReducer: {/_estado do meuReducer_/},
// outroReducer: {/_estado do meuOutroReducer_/,}
//}
