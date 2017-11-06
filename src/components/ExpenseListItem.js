import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseItem = ({id, description, amount, createdAt, dispatch }) => (
    <div>
        <h3><Link to={`/edit/${id}`}>{ description }</Link></h3>
        <p> { amount}-{ createdAt }</p>
    </div>
);

const mapStoreToProps = (state) => {
    return {
        expenses: state.expenses
    };
};
export default ExpenseItem;