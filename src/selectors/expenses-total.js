import React from 'react';

const selectExpensesTotal = (expenses) => {
    let total = 0;
    expenses.forEach((exp)=>{
        total+=exp.amount;
    })
    return total;
};
export default selectExpensesTotal;

