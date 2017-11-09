import React from 'react';
import { shallow } from 'enzyme';
import ExpensesSummary from '../../components/ExpensesSummary';

test('Should correctly render expenses summary with 1 expense',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={10} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly render expenses summary with multi expense',()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expenseTotal={13330} />);
    expect(wrapper).toMatchSnapshot();
});