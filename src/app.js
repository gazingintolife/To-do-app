import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const ourStore = configureStore();

const jsx = (
    <Provider store = {ourStore}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render( jsx , document.getElementById('app'));
 


