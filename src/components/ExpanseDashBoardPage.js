import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFIlters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';


const ExpenseDashBoardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFIlters />
        <ExpenseList />
    </div>
);

export default ExpenseDashBoardPage;