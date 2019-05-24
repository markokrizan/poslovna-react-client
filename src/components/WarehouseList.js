import React, { Component } from 'react'
import { Link } from 'react-router-dom';

//used to connect the component and the redux store
import {connect} from 'react-redux';
import {fetchWarehouses} from '../actions/warehouseActions';

class WarehouseList extends Component {

  componentWillMount(){
    //you recive the action for usage via props
    this.props.fetchWarehouses();
  }

  componentDidMount(){
    console.log(this.props.warehouses);
  }


  render() {
    return (
        <div className="col-md-2 h-100 p-0 bg-info">
            <ul className="list-group">
            <li className="list-group-item d-flex align-items-center justify-content-center"><Link className = "custom-link" to={`/warehouse/1`}>Warehouse 1</Link></li>
            <li className="list-group-item d-flex align-items-center justify-content-center"><Link className = "custom-link" to={`/warehouse/2`}>Warehouse 2</Link></li>
            <li className="list-group-item d-flex align-items-center justify-content-center"><Link className = "custom-link" to={`/warehouse/3`}>Warehouse 3</Link></li>
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
         