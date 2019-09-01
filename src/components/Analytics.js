import React, { useEffect, useState } from 'react'
import { getArticlesCardAnalytics } from '../services/ArticleService'
import { CURRENCY } from "../consts";

export default function Analytics({match}) {

    const [productAnalytics, setProductAnalytics] = useState([])

    useEffect(() => {
      (async () => {
        setProductAnalytics(await getArticlesCardAnalytics(match.params.id));
      })();
    }, [])

    const renderAnalytics = () => {
      return productAnalytics.map(analytic => {
        return (
          <tr>
            <th scope="row">1</th>
            <td>{analytic.type}</td>
            <td>{analytic.direction}</td>
            <td>{analytic.quantity}</td>
            <td>{CURRENCY} {analytic.price}</td>
            <td>{CURRENCY} {analytic.value}</td>
          </tr>
        )
      })
    }

    return (
      <div>
        <div className="col-md-12 p-0 bg-info" >
          <div className="card">
            <div className="card-header d-flex justify-content-center align-items-center"> Product analytics</div>
            <div className="card-body">
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
                  {renderAnalytics()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  
}


