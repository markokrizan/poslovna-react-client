import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-md-12 p-0">
            <div className="card-body bg-dark text-light d-flex flex-column">
                <div className="row">
                <div className="col-md-3 d-flex justify-content-center align-items-center">
                    <Link className = "home-link" to={`/`}><i className="fa fa-industry fa-2x"></i></Link>
                </div>
                <div className="col-md-3 d-flex justify-content-center align-items-center">
                    
                </div>
                <div className="col-md-3 d-flex justify-content-center align-items-center">
                    
                </div>
                <div className="col-md-3 d-flex justify-content-end align-items-center"><Link className = "custom-link" to={`/user`}><a className="btn btn-info"><i className="fa fa-user-o fa-2x"></i></a></Link></div>
                </div>
            </div>
            </div>
        </div>);
  }
}

export default Header
