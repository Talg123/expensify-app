import React from 'react';
import ReactDOM from 'react-dom';
import  { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisiableExpenses from './selectors/expenses.js';
import { addExpense, editExpanse, removeExpense} from './actions/expenses';
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();

const jsx = (
    <Provider store={store}>
         <AppRouter />
    </Provider>
);
ReactDOM.render(jsx ,document.getElementById('app'));