import React, { Component } from "react";
import { Link } from "react-router-dom";
import { concludeFiscalYear } from '../services/FiscalYearService'

class Toolbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
          <div className="btn-group mr-2" role="group" aria-label="First group">
            <Link className="toolbar-link" to={`/order-products`}>
              <a className="btn btn-dark">
                <i className="fa fa-arrow-down"></i> Order{" "}
              </a>
            </Link>
            <Link className="toolbar-link" to={`/ship-products`}>
              <a className="btn btn-dark" href="#">
                <i className="fa fa-arrow-up"></i> Ship{" "}
              </a>
            </Link>
            <Link className="toolbar-link" to={`/in-house-tranzit`}>
              <a className="btn btn-dark" href="#">
              <i className="fa fa-arrows-alt"></i>&nbsp;In house
              </a>
            </Link>
            <Link className="toolbar-link" to={`/documents`}>
              <a className="btn btn-dark" href="#">
                <i className="fa fa-file-text"></i>&nbsp;Documents
              </a>
            </Link>
            <Link className="toolbar-link" to={`/company-info`}>
              <a className="btn btn-dark" href="#">
              <i className="fa fa-building-o"></i>Company
              </a>
            </Link>
            <Link className="toolbar-link" to={`/documents`}>
              <a className="btn btn-dark" href="#" onClick = {async () => {
                const userResponse = window.confirm("Conclude fiscal year?");
                if (userResponse == true) {
                  await concludeFiscalYear();
                }
              }}>
                <i className="fa fa-times-circle"></i>Conclude
              </a>
            </Link>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Toolbar;
