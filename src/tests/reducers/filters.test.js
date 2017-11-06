import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should setup default filters values',()=>{
    const state = filtersReducer(undefined,{type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate:moment().endOf('month')
    })
});
test('Should set sortBy to amount', ()=>{
    const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', ()=>{
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filtersReducer(currentState,{type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date');
});
test('should set text filter',()=>{
    const text = "Bla";
    const action = {
        type:'SET_TEXT',
        text
    }
    const state = filtersReducer(undefined,action);
    expect(state.text).toBe('Bla');
});
test('Should set start date filter',()=>{
    const startDate = moment();
    const action = {
        type:'SET_START_DATE',
        startDate
    };
    const state = filtersReducer(undefined,action);
    expect(state.startDate).toEqual(startDate);
})
