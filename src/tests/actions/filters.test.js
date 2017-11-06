import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('Should generate set start date action object;',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate: moment(0)
    })
});

test('Should genrate set end date action object',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
});

test('Should set text filter to string',()=>{
    const action = setTextFilter('tal');
    expect(action).toEqual({
        type:'SET_TEXT',
        text:'tal'
    })
});

test('Should set text filter to none',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT',
        text: ''
    })
});
test('Should set sort by amount',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT',
    })
});
test('Should set sort by date',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE',
    })
})