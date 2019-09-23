import React, { useEffect, useState } from 'react'
import { getArticlesCardAnalytics } from '../services/ArticleService'
import { CURRENCY } from "../consts";
import { getCurrentFiscalYear } from '../services/FiscalYearService'
import { API_CONSTS } from '../consts';

export default function Analytics({match}) {

    const [productAnalytics, setProductAnalytics] = useState([])

    useEffect(() => {
      (async () => {
        setProductAnalytics(await getArticlesCardAnalytics(match.params.articleId));
      })();
    }, [])

    const getAnalyticReport = async articleCardId => {
      const fiscalYear = await getCurrentFiscalYear();
      window.location.href =  `${API_CONSTS.baseUrl}reports/articleCardAnalytics/${match.params.warehouseId}/${match.params.articleId}/${fiscalYear.id}`;
    }

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
              {productAnalytics.length > 0 ? (<button
                className="btn btn-info m-1"
                onClick={() => getAnalyticReport()}
              >Analytic report <i class="fa fa-file-pdf-o" aria-hidden="true"></i></button>) : ''}
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


