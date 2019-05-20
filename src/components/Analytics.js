import React, { Component } from 'react'

export class Analytics extends Component {
  render() {
    return (
      <div>
        <div className="col-md-12 p-0 bg-info" >
          <div className="card">
            <div className="card-header d-flex justify-content-center align-items-center"> Warehouse 1</div>
            <div className="card-body">
              <h5 className="card-title"><b>Some product 1</b></h5>
              <h6 className="card-subtitle my-2 text-muted">Product id: 1222</h6>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Type</th>
                    <th scope="col">Direction</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>OT</td>
                    <td>U</td>
                    <td>12</td>
                    <td>$10.00</td>
                    <td>$120.00</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>OT</td>
                    <td>U</td>
                    <td>12</td>
                    <td>$10.00</td>
                    <td>$120.00</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>OT</td>
                    <td>U</td>
                    <td>12</td>
                    <td>$10.00</td>
                    <td>$120.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Analytics
