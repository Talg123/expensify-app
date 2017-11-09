import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selected from '../selectors/expenses';
import Amount from '../selectors/expenses-total';

export const ExpenseList = (props) => (
    <div>
    <h1>ExpenseList amount</h1>
    {   
        props.expenses.length === 0 ? (<p>No Expenses</p>) : (
        props.expenses.map((expense)=> {
            return <ExpenseListItem key={expense.id} {...expense} />
        })
        )
    }
        
    </div>
);

const mapStateToProps = (state)=>{
    return {
        expenses: selected(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);