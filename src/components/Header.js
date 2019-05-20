import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-md-12 p-0">
            <div className="card-body bg-dark text-light d-flex flex-column">
                <div className="row">
                <div className="col-md-3 d-flex justify-content-center align-items-center">
                    <i className="fa fa-industry fa-2x"></i>
                </div>
                <div className="col-md-3 d-flex justify-content-center align-items-center">
                    <h5>Novi Sad, Serbia</h5>
                </div>
                <div className="col-md-3 d-flex justify-content-center align-items-center">
                    <h5>PIB: 2251651651651</h5>
                </div>
                <div className="col-md-3 d-flex justify-content-end align-items-center"><a className="btn btn-info" href="./pages/user.html"><i className="fa fa-user-o fa-2x"></i></a></div>
                </div>
            </div>
            </div>
        </div>);
  }
}

export default Header
