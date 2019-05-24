import { FETCH_WAREHOUSES } from './types';

//warehouse specific action creator

export function fetchWarehouses(){
    //dispatch - similar to a promise resolver
    return function(dispatch){
        //this is where you can fetch the data
        //dummy data dispatched here
        dispatch({
            type: FETCH_WAREHOUSES,
            payload: [
                'Warehouse 1',
                'Warehouse 2',
                'Warehouse 3'
            ]
        })
    }
}