import React, { Component } from 'react'

class Toolbar extends Component {
  render() {
    return (
        <div className="row m-1">
            <div className="col-md-1 d-flex justify-content-center align-items-center bg-info"><a className="btn btn-dark" href="./pages/order-products.html"><i className="fa fa-arrow-down"></i> Order </a></div>
            <div className="col-md-1 d-flex justify-content-center align-items-center bg-info"><a className="btn btn-dark" href="#"><i className="fa fa-arrow-up"></i> Ship </a></div>
            <div className="col-md-1 bg-info d-flex justify-content-center align-items-center"><a className="btn btn-dark btn-block w-100 m-0 p-0 py-1" href="./pages/pending-orders.html"><i className="fa fa-file-text-o"></i>&nbsp;Orders (2)</a></div>
            <div className="col-md-1 d-flex justify-content-center align-items-center bg-info"></div>
            <div className="col-md-1 d-flex justify-content-center align-items-center bg-info"></div>
            <div className="col-md-1 d-flex justify-content-center align-items-center bg-info"></div>
            <div className="col-md-1"></div>
      </div>
    )
  }
}

export default Toolbar
