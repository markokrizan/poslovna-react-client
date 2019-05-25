import { FETCH_WAREHOUSES } from './types';
import {getWarehouses} from '../services/warehouseService';
import { startFetch, endFetch } from '../actions/loadingActions';

//warehouse specific action creator


export function fetchWarehouses(){
    //dispatch - similar to a promise resolver
    return async function(dispatch){
        //this is where you can fetch the data
        //and return it within the dispatch to be accessible within the reducer
        //done via the service
        dispatch(startFetch());
        const data = await getWarehouses();
        dispatch(endFetch());
        dispatch({
            type: FETCH_WAREHOUSES,
            payload: data
        })
    }
}