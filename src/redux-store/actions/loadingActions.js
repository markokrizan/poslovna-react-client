import { START_FETCH, END_FETCH } from './types';


export function startFetch(){
    console.log("START FETCH ACTION");
    return async function(dispatch){
        dispatch({
            type: START_FETCH
        })
    }
}

export function endFetch(){
    console.log("END FETCH ACTION");
    return async function(dispatch){
        dispatch({
            type: END_FETCH
        })
    }
}