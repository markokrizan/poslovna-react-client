import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './pingendo-libs/bootstrap-4.3.1.css';
import './pingendo-libs/font-awesome.min.css';

import {Provider} from 'react-redux';
import store from './redux-store/store';



ReactDOM.render(
    //DIRTY:
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);


