import  { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD Expense
const addExpense = ({ description = '', note = '',amount = 0, createdAt = 0} = {} ) => ({
    type:'ADD',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//Remove Expense
const removeExpense = ({ id } = {})=>({
    type:'REMOVE',
    id
});

//Edit Expense

const editExpanse = (id,updates) =>({
    type:'EDIT',
    id,
    updates
});

//Expenses Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState ,action) =>{
    switch(action.type){
        case 'ADD':
             return [...state, action.expense];
        case 'REMOVE': 
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,...action.updates
                    };
                }
            });
        default: return state;
    }
};
//SET text filter
const setTextFilter = (text = '') =>({
    type:'SET_TEXT',
    text
});

//SORT by amount
const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT'
});
//SORT by date
const sortByDate = () => ({
    type:'SORT_BY_DATE'
});
//SET start date
const setStartDate = (date = undefined) => ({
    type:'SET_START_DATE',
    date
});
//SET end date
const setEndDate = (date = undefined) => ({
    type:'SET_END_DATE',
    date
});
//Filters Reducer
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filterReducerDefaultState , action) =>{
    switch(action.type){
        case 'SET_TEXT':
            return {
                ...state, 
                text:action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            };
        default: return state;
    } 
};
//Get visiable expenses
const getVisiableExpenses = (expenses, {text, sortBy, startDate, endDate }) =>{


    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};
//Store creation
const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
    })
);

store.subscribe(()=>{
    const state = store.getState();
    const visiableExpenses = getVisiableExpenses(state.expenses, state.filters);
    console.log(visiableExpenses);
});

const expOne = store.dispatch(addExpense({description: 'some test', note: 'some note', amount:500 , createdAt:-21000}));
const expTwo = store.dispatch(addExpense({description: 'coffe', amount:200 , createdAt: -1000}));
// store.dispatch(removeExpense({ id: expTwo.expense.id }));
// store.dispatch(editExpanse(expOne.expense.id,{ amount:300}));
// store.dispatch(setTextFilter('co'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(1204));
// store.dispatch(setStartDate());
//demo state
const demoState = {
    expenses: [{
        id: 'sssd',
        description: 'january Rent',
        note: 'This was final payment...',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'data',//date or amount
        startDate: undefined,
        endDate: undefined
    }
};