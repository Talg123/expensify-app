import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseItem = ({id, description, amount, createdAt, dispatch }) => (
    <div>
        <h3><Link to={`/edit/${id}`}>{ description }</Link></h3>
        <p> { numeral(amount / 100).format('$0,0.00') }
            -
            { moment(createdAt).format('Do MMMM YYYY') }
        </p>
    </div>
);

const mapStoreToProps = (state) => {
    return {
        expenses: state.expenses
    };
};
export default ExpenseItem;