import { START_FETCH, END_FETCH } from '../actions/types';

// const initialState = {
//     isFetching: false
// }

export default function(/*state = initialState*/ action){
    switch(action.type){
        case START_FETCH:
            console.log("STARTING FETCH, CURRENT STATE: " + state.isFetching);
            return{
                //...state,
                isFetching: true
            };
        case END_FETCH:
            console.log("ENDING FETCH, CURRENT STATE: " + state.isFetching);
            return{
                //...state,
                isFetching: false
            };
        default:
            return state;
    
    }
}