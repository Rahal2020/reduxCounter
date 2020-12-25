import {INCREMENT, DECREMENT, RESET} from '../Constants/ActionsTypes'
const initialState={
  counter: 0,
};
const CounterReducer = (state=initialState, action) => {
    switch (action.type) {
     case INCREMENT:
       return {...state, counter: state.counter + 1};
       case DECREMENT:
        return {...state, counter: state.counter && state.counter - 1};
        case RESET:
       return {...state, counter: 0 };
     default:
       return state;
    } 
    };
    export default CounterReducer