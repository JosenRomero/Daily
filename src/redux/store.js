import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // activa la extensión de las devtools

import reducers from './reducers';

const store = createStore(
    reducers, 
    composeWithDevTools()
);

export default store;