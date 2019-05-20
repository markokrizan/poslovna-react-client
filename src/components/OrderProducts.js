import React, { Component } from 'react'

export class OrderProducts extends Component {
  render() {
    return (
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-12 p-0 bg-info">
          <div className="card">
            <div className="card-header d-flex justify-content-center align-items-center"> Order products</div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-end border-right">
                  <h5 className="">Pick business partner:</h5>
                </div>
                <div className="col-md-6 d-flex"><select className="w-50 rounded">
                    <option value="" selected="" disabled="">Select business partner</option>
                    <option data-tokens="ketchup mustard" value="Hot Dog, Fries and a Soda">Company x</option>
                    <option data-tokens="mustard" value="Burger, Shake and a Smile">Company y</option>
                    <option data-tokens="frosting" value="Company x">Company x</option>
                  </select></div>
              </div>
              <br/>
              <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-end border-right">
                  <h5 className="">Pick local warehouse:</h5>
                </div>
                <div className="col-md-6 d-flex"><select className="w-50 rounded">
                    <option value="" selected="" disabled="">Select local warehouse</option>
                    <option data-tokens="ketchup mustard" value="Hot Dog, Fries and a Soda">Warehouse 1</option>
                    <option data-tokens="mustard" value="Burger, Shake and a Smile">Warehouse 2</option>
                    <option data-tokens="frosting" value="Company x">Warehouse 3</option>
                  </select></div>
              </div>
              <br/>
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header"> Pick products to order:</div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12 d-flex justify-content-center align-items-center">
                          <form className="form-inline">
                          </form>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-group">
                            <input type="text" className="form-control w-75" id="inlineFormInputGroup" placeholder="Search products"/>
                            <div className="input-group-append"><button className="btn btn-dark" type="button"><i className="fa fa-search"></i></button></div>
                          </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                          <select className="rounded w-100">
                            <option value="" selected="" disabled="">Filter products by group</option>
                            <option data-tokens="ketchup mustard" value="Hot Dog, Fries and a Soda">Company x</option>
                            <option data-tokens="mustard" value="Burger, Shake and a Smile">Company y</option>
                            <option data-tokens="frosting" value="Company x">Company x</option>
                          </select>
                        </div>
                      </div>
                      <br/>
                      <div className="row">
                        <div className="col-md-12">
                          <table className="table">
                            <thead className="thead-dark">
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col" className="text-center">Article name</th>
                                <th scope="col" className="text-center">Availible quantity</th>
                                <th scope="col" className="text-center">Unit price</th>
                                <th scope="col" className="text-center">Quantity</th>
                                <th scope="col"></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td className="text-center">Some product 1</td>
                                <td className="text-center">12121</td>
                                <td className="text-center">0.80$</td>
                                <td className="d-flex justify-content-center align-items-center"><input type="text" className="form-control w-75" id="inlineFormInputGroup" placeholder="Enter quantity"/></td>
                                <td><a className="btn btn-info" href="#">Add</a></td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td className="text-center">Some product 2</td>
                                <td className="text-center">122</td>
                                <td className="text-center">0.80$</td>
                                <td className="d-flex align-items-center justify-content-center"><input type="text" className="form-control w-75" id="inlineFormInputGroup" placeholder="Enter quantity"/></td>
                                <td><a className="btn btn-info" href="#">Add</a></td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td className="text-center">Some product 3</td>
                                <td className="text-center">33</td>
                                <td className="text-center">0.80$</td>
                                <td className="d-flex justify-content-center align-items-center"><input type="text" className="form-control w-75" id="inlineFormInputGroup" placeholder="Enter quantity"/></td>
                                <td><a className="btn btn-info" href="#">Add</a></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header"> Picked products:</div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-3 d-flex justify-content-center align-items-center"><a className="btn btn-dark" href="#"><i className="fa fa-pencil-square-o"></i>&nbsp;Modify</a></div>
                        <div className="col-md-3 d-flex justify-content-center align-items-center"><a className="btn btn-dark" href="#"><i className="fa fa-trash-o"></i>&nbsp;Delete</a></div>
                        <div className="col-md-3"></div>
                        <div className="col-md-3"></div>
                      </div>
                      <br/>
                      <table className="table">
                        <thead className="thead-dark">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col" className="text-center">Article name</th>
                            <th scope="col" className="text-center">Quantity</th>
                            <th scope="col" className="text-center">Unit price</th>
                            <th scope="col" className="text-center" contenteditable="true">Total</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td className="text-center">Some product 1</td>
                            <td className="text-center">12121</td>
                            <td className="text-center">0.80$</td>
                            <td className="text-center">1000.12$</td>
                            <td><input type="checkbox"/></td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td className="text-center">Some product 2</td>
                            <td className="text-center">122</td>
                            <td className="text-center">0.80$</td>
                            <td className="text-center">1000.12$</td>
                            <td><input type="checkbox"/></td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td className="text-center">Some product 3</td>
                            <td className="text-center">33</td>
                            <td className="text-center">0.80$</td>
                            <td className="text-center">1000.12$</td>
                            <td><input type="checkbox"/></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <br/>
              <div className="row">
                <div className="col-md-12 d-flex justify-content-end align-items-center border-top p-1"><a class="btn btn-success" href="#">Place order</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default OrderProducts
