import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFIlters from './ExpenseListFilters';


const ExpenseDashBoardPage = () => (
    <div>
        <ExpenseListFIlters />
        <ExpenseList />
    </div>
);

export default ExpenseDashBoardPage;