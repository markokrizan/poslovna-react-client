import { FETCH_WAREHOUSES } from '../actions/types';

//warehouse reducer

const initialState = {
    items: []
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_WAREHOUSES:
            //reduce the inital state with the new data (payload from the action that brings in new data for the state)
            return{
                ...state,
                items: action.payload
            };
        default:
            //return the current state if there is no action
            //in the root reducer all other reducers are combined
            //the actions is checked for existance in each one
            //if there isnt one you need to return the default state  
            //from this reducer in order to complete the combination of data
            //from all other reducers
            return state;
    
    }
}