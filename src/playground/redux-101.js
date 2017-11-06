import { createStore } from 'redux';

const incrementCount = ({incrementBy: inc =1 } = {}) =>({type: 'INCREMENT',
                                        incrementBy: inc });
const decrementCount = ({decrementBy: dec = 1}) => ({type: 'DECREMENT',
                                                    decrementBy: dec });
const resetCount = () => ({type: 'RESET'});

const setCount = ({setBy: count = 0}) => ({type: 'SET', count: count});

const store = createStore((state = { count:0 }, action)=>{
    switch(action.type){
        case 'INCREMENT': return { count:state.count + action.incrementBy };
        case 'DECREMENT': return { count: state.count - action.decrementBy};
         case 'SET': return {count: action.count};
        case 'RESET': return { count: 0 };
        default: return state;
    }
   
    return state;
});
store.subscribe(()=>{
    console.log(store.getState());
});
store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(resetCount());
store.dispatch(setCount({setBy: 30}));