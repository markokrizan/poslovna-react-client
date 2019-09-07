import React, {Fragment}  from 'react'
import { Link } from 'react-router-dom'
import isLoggedIn from '../services/AuthService'

export default function Header({mockUser}){

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
                <div className="col-md-3 d-flex justify-content-end align-items-center">
                    {isLoggedIn() ? (
                        <Fragment>
                            <span>{mockUser ? `${mockUser.firstName} ${mockUser.lastName}` : ''}&nbsp;</span>
                            <Link className = "custom-link" to={`/user`}><a className="btn btn-info"><i className="fa fa-user-o fa-2x"></i></a></Link>
                        </Fragment>
                    ) : (
                        <Link className = "custom-link" to={`/login`}><a className="btn btn-info"><i className="fa fa-user-o fa-2x"></i></a></Link>
                    )}
                    
                </div>
                </div>
            </div>
            </div>
        </div>);
}
