//SET text filter
export const setTextFilter = (text = '') =>({
    type:'SET_TEXT',
    text
});

//SORT by amount
export const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT'
});
//SORT by date
export const sortByDate = () => ({
    type:'SORT_BY_DATE'
});
//SET start date
export const setStartDate = (startDate = undefined) => ({
    type:'SET_START_DATE',
    startDate
});
//SET end date
export const setEndDate = (endDate = undefined) => ({
    type:'SET_END_DATE',
    endDate
});