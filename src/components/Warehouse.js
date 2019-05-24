import React, { Component} from 'react'
import { Link } from 'react-router-dom';

export class Warehouse extends Component {
  render() {
    return (
        <div className="col-md-10 p-0 bg-info" draggable="true">
          <div className="card">
            <div className="card-header d-flex justify-content-center align-items-center"> Warehouse 1</div>
            <div className="card-body">
              <h4>Main warehouse 1</h4>
              <p>Bulevar oslobodjenja 133, Novi Sad</p>
              <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-end border-right">
                  <h5 className="">Filter by article group:</h5>
                </div>
                <div className="col-md-6 d-flex"><select className="w-50 rounded">
                    <option data-tokens="ketchup mustard" value="Hot Dog, Fries and a Soda">Group 1</option>
                    <option data-tokens="mustard" value="Burger, Shake and a Smile">Group 2</option>
                    <option data-tokens="frosting" value="Company x">Group 3</option>
                  </select></div>
              </div>
              <br/>
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col" className="text-center">Article name</th>
                    <th scope="col">Current Quantity</th>
                    <th scope="col">Current value</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Some product 1</td>
                    <td>12121</td>
                    <td>$1900.44</td>
                    <td><Link className = "custom-link" to={`/product/1`}><a className="btn btn-info">Info</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Some product 2</td>
                    <td>122</td>
                    <td>$1900.44</td>
                    <td><Link className = "custom-link" to={`/product/2`}><a className="btn btn-info">Info</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Some product 3</td>
                    <td>33</td>
                    <td>$1900.44</td>
                    <td><Link className = "custom-link" to={`/product/3`}><a className="btn btn-info">Info</a></Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
    )
  }
}

export default Warehouse
