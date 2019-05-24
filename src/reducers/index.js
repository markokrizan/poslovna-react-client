//root reducer file

import {combineReducers} from 'redux';
import warehouseReducer from './warehouseReducer';

export default combineReducers({
    //warehouses is the name of the value the warehouseReducer would return, so you use the prop data via this name
    warehouses: warehouseReducer
})
