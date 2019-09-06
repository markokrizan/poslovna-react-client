import React, { useState } from 'react'


export default function Login({handleMockLogin}){

    return (
        <div className="row h-100">
            <div className="col-md-3"></div>
            <div className="col-md-6 justify-content-center align-items-center">
              <div className="card mt-5">
                <div className="card-body">
                  <h3 className="text-center mb-3">Log in:</h3>
                  <form id="c_form-h" className="">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group row d-flex justify-content-center align-items-center">
                          <div className="col-10 d-flex justify-content-center align-items-center">
                            <input type="text" className="form-control w-75" id="inputmailh" placeholder="Enter username"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group row d-flex justify-content-center align-items-center">
                          <div className="col-10 d-flex justify-content-center align-items-center">
                            <input type="password" className="form-control w-75" id="inputmailh" placeholder="Enter password"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-4"></div>
                      <div className="col-md-4 d-flex justify-content-center align-items-center"><button type="button" className="btn btn-success" onClick = {() => handleMockLogin()}>Log in</button></div>
                      <div className="col-md-4"></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
    );
}
