import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class PendingOrders extends Component {
  render() {
    return (
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-12 p-0 bg-info" >
          <div className="card">
            <div className="card-header d-flex justify-content-center align-items-center">Pending orders</div>
            <div className="card-body">
              <br/>
              <br/>
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <table className="table">
                      <thead className="thead-dark">
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col" className="text-center">Serial number</th>
                          <th scope="col" className="text-center">Date formed</th>
                          <th scope="col" className="text-center">Business partner</th>
                          <th scope="col" className="text-center"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td className="text-center">G543423</td>
                          <td className="text-center">01/01/2019</td>
                          <td className="text-center">Company 1</td>
                          <td className="text-center"><Link className = "custom-link" to={`/pending-orders/1`}><a className="btn btn-info">Detalis</a></Link></td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td className="text-center">J43534534</td>
                          <td className="text-center">02/01/2019</td>
                          <td className="text-center">Company 2</td>
                          <td className="text-center"><Link className = "custom-link" to={`/pending-orders/2`}><a className="btn btn-info">Detalis</a></Link></td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td className="text-center">H3453455</td>
                          <td className="text-center">03/01/2019</td>
                          <td className="text-center">Company 3</td>
                          <td className="text-center"><Link className = "custom-link" to={`/pending-orders/3`}><a className="btn btn-info">Detalis</a></Link></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <br/>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default PendingOrders
