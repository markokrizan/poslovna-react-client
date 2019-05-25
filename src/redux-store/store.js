import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const initialState = {
    isFetching: false
};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));
console.log(store.getState());

// store.subscribe(() => {
//     console.log(store);
// });

export default store;