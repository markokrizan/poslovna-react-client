import React, { Component } from "react";
import { Link } from "react-router-dom";

class Toolbar extends Component {
  render() {
    return (
      <div className="row m-1">
        <div className="col-md-1 d-flex justify-content-center align-items-center bg-info">
          <Link className="toolbar-link" to={`/order-products`}>
            <a className="btn btn-dark">
              <i className="fa fa-arrow-down"></i> Order{" "}
            </a>
          </Link>
        </div>
        <div className="col-md-1 d-flex justify-content-center align-items-center bg-info">
          <Link className="toolbar-link" to={`/ship-products`}>
            <a className="btn btn-dark" href="#">
              <i className="fa fa-arrow-up"></i> Ship{" "}
            </a>
          </Link>
        </div>
        <div className="col-md-1 bg-info d-flex justify-content-center align-items-center">
          <Link className="toolbar-link" to={`/in-house-tranzit`}>
            <a className="btn btn-dark btn-block w-100 m-0 p-0 py-1">
              <i className="fa fa-arrows-alt"></i>&nbsp;In house tranzit
            </a>
          </Link>
        </div>
        <div className="col-md-1 bg-info d-flex justify-content-center align-items-center">
          <Link className="toolbar-link" to={`/pending-orders`}>
            <a className="btn btn-dark btn-block w-100 m-0 p-0 py-1">
              <i className="fa fa-file-text-o"></i>&nbsp;Orders (2)
            </a>
          </Link>
        </div>
        <div className="col-md-1 d-flex justify-content-center align-items-center bg-info"></div>
        <div className="col-md-1 d-flex justify-content-center align-items-center bg-info"></div>
        <div className="col-md-1 d-flex justify-content-center align-items-center bg-info"></div>
        <div className="col-md-1 d-flex justify-content-center align-items-center bg-info"></div>
        <div className="col-md-1 d-flex justify-content-center align-items-center bg-info"></div>
        <div className="col-md-1 d-flex justify-content-center align-items-center bg-info"></div>
        <div className="col-md-1 d-flex justify-content-center align-items-center bg-info"></div>
        <div className="col-md-1 d-flex justify-content-center align-items-center bg-info">
          <Link className="toolbar-link" to={`/company-info`}>
            <a className="btn btn-dark btn-block w-100 m-0 p-0 py-1">
              <i className="fa fa-building-o"></i>Company
            </a>
          </Link>
        </div>
      </div>
    );
  }
}

export default Toolbar;
