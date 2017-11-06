import uuid from 'uuid';

//ADD Expense
export const addExpense = ({ description = '', note = '',amount = 0, createdAt = 0} = {} ) => ({
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
export const removeExpense = ({ id } = {})=>({
    type:'REMOVE',
    id
});

//Edit Expense

export const editExpense = (id,updates) =>({
    type:'EDIT',
    id,
    updates
});