import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expWord = expenseCount === 1 ? "expense" : "expenses";
    const total = numeral(expensesTotal / 100).format('$0,0.00')
    return (
        <div>
            <h1> Viewing {expenseCount} {expWord} totaling { total }</h1>
        </div>
    );
};

const mapStateToProps = (state) =>{
    const visiable = selectExpenses(state.expenses,state.filters);
    return {
        expenseCount: visiable.length,
        expensesTotal: selectExpensesTotal(visiable)
    };
};
export default connect(mapStateToProps)(ExpensesSummary);