const Redux = require('redux');

import { createStore } from 'redux';
// Importando o reducer combinado que fizemos logo acima
import reducerCombinado from './reducers/index';

const store = createStore(reducerCombinado);

store.subscribe(() => { // subscribe adiciona um listener que executará uma callback toda vez que uma action for despachada
  console.log(store.getState());
});
