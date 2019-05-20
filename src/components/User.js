import React, { Component } from 'react'

export class User extends Component {
  render() {
    return (
        <div className="container">
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
                    <h5 className="text-left">Mike</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 border-right">
                    <h5 className="text-right">Last name:</h5>
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-left">Smith</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 border-right">
                    <h5 className="text-right">Email:</h5>
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-left">mikesmith@mail.com</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 border-right">
                    <h5 className="text-right">Role:</h5>
                  </div>
                  <div className="col-md-6">
                    <h5 className="text-left">Admin</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default User
