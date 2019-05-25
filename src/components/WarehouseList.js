import React, { Component } from 'react'
import { Link } from 'react-router-dom';

//used to connect the component and the redux store
import {connect} from 'react-redux';
import {fetchWarehouses} from '../redux-store/actions/warehouseActions';

class WarehouseList extends Component {

  componentDidMount(){
    //you recive the action for usage via props
    //call the initial data fetch here as usual:
    this.props.fetchWarehouses();
  }



  render() {
    //use it within the component:
    console.log(this.props.warehouses);
    return (
        <div className="col-md-2 h-100 p-0 bg-info">
            <ul className="list-group">
            {this.props.warehouses.map(warehouse => (
              <li key={warehouse.id} className="list-group-item d-flex align-items-center justify-content-center"><Link className = "custom-link" to={`/warehouse/${warehouse.id}`}>{warehouse.name}</Link></li>
            ))}
            </ul>
        </div>
    )
  }
}

//get state from redux and map it to props for usage within the component:
const mapStateToProps = state => ({
  //now you can use this.props.warehouses
  warehouses: state.warehouses.items

});


//connection of the component to the store:
//connect(mapStateToProps, {action})
export default connect(mapStateToProps, {fetchWarehouses})(WarehouseList);
         