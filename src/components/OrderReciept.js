import React, { Component } from 'react'

export default class OrderReciept extends Component {
  render() {
    return (
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-12 p-0 bg-info">
          <div className="card">
            <div className="card-header d-flex justify-content-center align-items-center" contenteditable="true">Receipt</div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-end border-right">
                  <h5 className="">Business partner:</h5>
                </div>
                <div className="col-md-6 d-flex">
                  <h5 className="">Company 1</h5>
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-end border-right">
                  <h5 className="">Local warehouse:</h5>
                </div>
                <div className="col-md-6 d-flex">
                  <h5 className="">Warehouse 1</h5>
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header"> Picked products:</div>
                    <div className="card-body">
                      <br/>
                      <table className="table">
                        <thead className="thead-dark">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col" className="text-center">Article name</th>
                            <th scope="col" className="text-center">Quantity</th>
                            <th scope="col" className="text-center">Unit price</th>
                            <th scope="col" className="text-center" contenteditable="true">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td className="text-center">Some product 1</td>
                            <td className="text-center">12121</td>
                            <td className="text-center">0.80$</td>
                            <td className="text-center">1000.12$</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td className="text-center">Some product 2</td>
                            <td className="text-center">122</td>
                            <td className="text-center">0.80$</td>
                            <td className="text-center">1000.12$</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td className="text-center">Some product 3</td>
                            <td className="text-center">33</td>
                            <td className="text-center">0.80$</td>
                            <td className="text-center">1000.12$</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="col-md-12 d-flex justify-content-end align-items-center border-top p-1"><a className="btn mr-1 btn-warning" href="#">Go back</a><a className="btn btn-success" href="#">Confirm order</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}