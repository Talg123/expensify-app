import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set default state',()=>{
    const state = expensesReducer(undefined,{type: '@@INIT'});
    expect(state).toEqual([]);
});

test('Should remove expenes',()=>{
    const action = {
        type: 'REMOVE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]])
})
test('Should not remove expenes if id not found',()=>{
    const action = {
        type: 'REMOVE',
        id: '-1'
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses)
});

test('Should add an expense', ()=>{
    const action = {
        type:'ADD',
        expense:{
            id:'4',
            description:'test4',
            amount:4,
            note: '',
            createdAt:0
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,action.expense]);
});

test('Should edit expensed by id',()=>{
    const action = {
        type:'EDIT',
        id: expenses[1].id,
        updates: {
            amount:20
        }
    }
    const state = expensesReducer(expenses,action);
    expect(state[1].amount).toBe(20);
});

test('Should not edit expensed if id wrong',()=>{
    const action = {
        type:'EDIT',
        id: '20',
        updates: {
            amount:20
        }
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});