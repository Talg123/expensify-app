//Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState ,action) =>{
    switch(action.type){
        case 'ADD':
             return [...state, action.expense];
        case 'REMOVE': 
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,...action.updates
                    };
                } else return expense
            });
        default: return state;
    }
};
export default expensesReducer;