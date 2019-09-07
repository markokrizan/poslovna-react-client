import React, { Component } from 'react'

export default function User({mockUser}){

    const handleMockLogout = () => {
      localStorage.clear();
      window.location.href = "/login";
    }

    debugger
    return (
        <div className="container">
        <br/>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title mb-4 text-left">Employee information:</h4>
                <div className="row">
                  <div className="col-md-6 border-right">
                    <h5 className="text-right">First name:</h5>
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-left">{mockUser ? mockUser.firstName : ''}</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 border-right">
                    <h5 className="text-right">Last name:</h5>
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-left">{mockUser ? mockUser.lastName : ''}</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 border-right">
                    <h5 className="text-right">Email:</h5>
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-left">{mockUser ? mockUser.email : ''}</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 border-right">
                    <h5 className="text-right">Role:</h5>
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-left">{mockUser ? mockUser.role : ''}</h5>
                  </div>
                </div>
                <br/>
                <div className="row">
                      <div className="col-md-4"></div>
                      <div className="col-md-4 d-flex justify-content-center align-items-center"><button type="button" className="btn btn-success" onClick = {() => handleMockLogout()}>Logout</button></div>
                      <div className="col-md-4"></div>
                    </div>
              </div>     
            </div>
          </div>
        </div>
      </div>
    )
}

