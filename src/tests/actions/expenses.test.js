import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should remove expense',()=>{
    const remove = removeExpense({id: '123abc'});
    expect(remove).toEqual({
        type:'REMOVE',
        id:'123abc'
     });
});
test('should edit the expense',()=>{
    const edit = editExpense(123,{note: 'new'});
    expect(edit).toEqual({
        type:'EDIT',
        id:123,
        updates: {note: 'new'}
    });
});

test('Should setup add expense object with values',()=>{
    const addData = {
        description: 'ss',
        amount: 100,
        createdAt:1000,
        note:'bla'
    };
    const add = addExpense(addData);
    expect(add).toEqual({
        type:'ADD',
        expense: {...addData, 
        id: expect.any(String)}
    })
});
test('should setup default values',()=>{
    const add = addExpense();
    expect(add).toEqual({
        type:'ADD',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt:0
        }
    });
})