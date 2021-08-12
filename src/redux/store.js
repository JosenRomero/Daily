import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // activa la extensión de las devtools
import thunk  from 'redux-thunk';

import reducers from './reducers';

const store = createStore(
    reducers, 
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default store;