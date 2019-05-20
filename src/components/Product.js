import React, { Component } from 'react'

export class Product extends Component {
  render() {
    return (
        <div class="col-md-12 p-0 bg-info" style={{height: "92% !important"}}>
          <div class="card">
            <div class="card-header d-flex justify-content-center align-items-center"> Warehouse 1</div>
            <div class="card-body">
              <h4>Main warehouse 1</h4>
              <p>Bulevar oslobodjenja 133, Novi Sad</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"><b>Some product 1</b></h5>
              <h6 class="card-subtitle my-2 text-muted">Product id: 1222</h6>
              <h6 class="card-subtitle my-2 text-muted">Group:&nbsp; Food</h6>
              <div class="row">
                <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
                  <p>Price:</p>
                </div>
                <div class="col-md-6">
                  <p>$100.20</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
                  <p>Quantity start state:</p>
                </div>
                <div class="col-md-6">
                  <p>12</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
                  <p>Unit:</p>
                </div>
                <div class="col-md-6">
                  <p>kg</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
                  <p>Value start state:</p>
                </div>
                <div class="col-md-6">
                  <p contenteditable="true">$1200.60</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
                  <p>Total input quantity:</p>
                </div>
                <div class="col-md-6">
                  <p>12</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
                  <p>Total output quantity:</p>
                </div>
                <div class="col-md-6">
                  <p>0</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
                  <p>Total input value:</p>
                </div>
                <div class="col-md-6">
                  <p>$1200.60</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
                  <p>Total output value:</p>
                </div>
                <div class="col-md-6">
                  <p>$0</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
                  <p>Quantity sum:</p>
                </div>
                <div class="col-md-6">
                  <p>12</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
                  <p>Value sum:</p>
                </div>
                <div class="col-md-6">
                  <p>$1200.60</p>
                </div>
              </div>
              <br/>
              <div class="row">
                <div class="col-md-4"></div>
                <div class="col-md-4 d-flex justify-content-center align-items-center"><a class="btn btn-info" href="./analytics.html">Analytics</a></div>
                <div class="col-md-4"></div>
              </div>
            </div>
          </div>
          <br/>
        </div>
    )
  }
}

export default Product
