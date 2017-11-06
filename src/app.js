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

const store = configureStore();
const expOne = store.dispatch(addExpense({description: 'Water bill', amount:4440}));
const expTwo = store.dispatch(addExpense({description: 'gas bill', createdAt: 789}));
const expThree = store.dispatch(addExpense({description: 'Water bill', amount:321}));

store.subscribe(()=>{
    const state = store.getState();
    const visiable = getVisiableExpenses(state.expenses, state.filters);
})

const jsx = (
    <Provider store={store}>
         <AppRouter />
    </Provider>
);
ReactDOM.render(jsx ,document.getElementById('app'));