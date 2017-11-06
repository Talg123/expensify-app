import moment from 'moment';

export default [{
    id:'1',
    description:'test1',
    amount:1,
    note: '',
    createdAt:0
},{
    id:'2',
    description:'test2',
    amount:2,
    note: '',
    createdAt:moment(0).subtract(4,'days').valueOf()
},{
    id:'3',
    description:'test3',
    amount:3,
    note: '',
    createdAt:moment(0).add(4,'days').valueOf()
}]