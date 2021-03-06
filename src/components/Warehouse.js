import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getArticlesCards } from "../services/ArticleService";
import { getArticleGroupArticles } from "../services/ArticleGroupService";
import { getWarehouse } from "../services/WarehouseService";
import GenericPagination from './GenericPagination';
import { API_CONSTS } from '../consts';

export default function Warehouse({ warehouseId, articleGroups }) {
  const [articleCards, setArticleCards] = useState([]);
  const [articleCardsPage, setArticleCardsPage] = useState([]);
  const [warehouseInfo, setWarehouseInfo] = useState(null);

  useEffect(() => {
    (async () => {
      if (warehouseId) {
        setWarehouseInfo(await getWarehouse(warehouseId));
        setArticleCards(await getArticlesCards(warehouseId));
      }
    })();
  }, [warehouseId]);

  const setPagedData = (page) => {
    setArticleCardsPage(page)
  }


  const renderArticles = () => {
    if(!articleCardsPage){
      return
    }
    return articleCardsPage.map((articleCard, idx) => {
      return (
        <tr>
          <th scope="row">{idx + 1}</th>
          <td>{articleCard.article.name}</td>
          <td>{articleCard.quantity}</td>
          <td>{articleCard.price ? articleCard.price : "N/A"}</td>
          <td>
            <Link
              className="custom-link"
              to={`/warehouses/${warehouseId}/article/${articleCard.article.id}`}
            >
              <a className="btn btn-info">Info</a>
            </Link>
          </td>
        </tr>
      );
    });
  };

  const renderGroupOptions = () => {
    return articleGroups.map(articleGroup => {
      return <option value={articleGroup.id}>{articleGroup.name}</option>;
    });
  };

  const handleArticleGroupChange = async e => {
    setArticleCards(await getArticleGroupArticles(warehouseId, e.target.value));
  };

  const getWarehouseLagerListReport = async () => {
    window.location.href = `${API_CONSTS.baseUrl}/reports/warehouseState/${warehouseId}`;
  }

  return warehouseId ? (
    <div className="col-md-10 p-0 bg-info" draggable="true">
      <div className="card">
        <div className="card-header d-flex justify-content-center align-items-center">
          {" "}
          Warehouse Info
        </div>
        <div className="card-body">
          <div class = "row">
            <div class = "col-md-6">
             <h4>{warehouseInfo ? warehouseInfo.name : ""}</h4>
             <p>{warehouseInfo ? warehouseInfo.address : ""}</p>
            </div>
            <div class = "col-md-6 d-flex justify-content-end align-items-center">
                <button class = "btn btn-info" onClick = {getWarehouseLagerListReport}><i class="fa fa-file-pdf-o" aria-hidden="true"></i> Lager list</button>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-end border-right">
              <h5 className="">Filter by article group:</h5>
            </div>
            <div className="col-md-6 d-flex">
              <select
                onChange={handleArticleGroupChange}
                className="w-50 rounded"
              >
                {renderGroupOptions()}
              </select>
            </div>
          </div>
          <br />
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col" className="text-center">
                  Article name
                </th>
                <th scope="col">Current Quantity</th>
                <th scope="col">Calculated price</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {articleCards ? renderArticles() : "Select a warehouse"}
            </tbody>
          </table>
        </div>
        <GenericPagination data={articleCards} returnPage={setPagedData}/>
      </div>
    </div>
  ) : (
    <div className="col-md-10 p-0 bg-info" >
      <div className="card">
        <div className="card-header d-flex justify-content-center align-items-center">
          {" "}
          Select a warehouse
        </div>
      </div>
    </div>
  );
}
