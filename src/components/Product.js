import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getArticlesCard } from "../services/ArticleService";

export default function Product({ match }) {
  const [articleCard, setArticleCard] = useState(null);

  useEffect(() => {
    (async () => {
      setArticleCard(await getArticlesCard(match.params.articleId));
    })();
  }, []);

  //total input value = input quantity * input price
  //total outpu price = output quantity * out price
  //value start state = price * quantity
  // article:
  // articleGroup:
  // id: 1
  // name: "cpu"
  // __proto__: Object
  // id: 1
  // name: "Intel i7 8th gen"
  // unit: "PCS"
  // inPrice: 0
  // inQuantity: 0
  // inValue: 0
  // outPrice: 0
  // outQuantity: 0
  // outValue: 0
  // price: null
  // quantity: 0
  // startStatePrice: 0
  // startStateQuantity: 0
  // startStateValue: 0
  // value: null
  console.log(articleCard);

  return (
    <div class="col-md-12 p-0 bg-info" style={{ height: "92% !important" }}>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">
            <b>{articleCard ? articleCard.article.name : null}</b>
          </h5>
          <h6 class="card-subtitle my-2 text-muted">
            Group:&nbsp;{" "}
            {articleCard ? articleCard.article.articleGroup.name : null}
          </h6>
          <div class="row">
            <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
              <p>Unit:</p>
            </div>
            <div class="col-md-6">
              <p>{articleCard ? articleCard.article.unit : null}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
              <p>Quantity start state:</p>
            </div>
            <div class="col-md-6">
              <p>{articleCard ? articleCard.startStateQuantity : null}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
              <p>Quantity start price:</p>
            </div>
            <div class="col-md-6">
              <p>{articleCard ? articleCard.startStatePrice : null}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
              <p>Quantity start value:</p>
            </div>
            <div class="col-md-6">
              <p>{articleCard ? articleCard.startStateValue : null}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
              <p>Total input quantity:</p>
            </div>
            <div class="col-md-6">
              <p>{articleCard ? articleCard.inQuantity : null}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
              <p>Input price:</p>
            </div>
            <div class="col-md-6">
              <p>{articleCard ? articleCard.inPrice : null}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
              <p>Total input value:</p>
            </div>
            <div class="col-md-6">
              <p>{articleCard ? articleCard.inValue : null}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
              <p>Total output quantity:</p>
            </div>
            <div class="col-md-6">
              <p>{articleCard ? articleCard.outQuantity : null}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
              <p>Output price:</p>
            </div>
            <div class="col-md-6">
              <p>{articleCard ? articleCard.outPrice : null}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
              <p>Total output value:</p>
            </div>
            <div class="col-md-6">
              <p>{articleCard ? articleCard.outValue : null}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
              <p>Quantity sum:</p>
            </div>
            <div class="col-md-6">
              <p>{articleCard ? articleCard.quantity : null}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
              <p>Average input price:</p>
            </div>
            <div class="col-md-6">
              <p>
                {articleCard && articleCard.price ? articleCard.price : "N/A"}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 d-flex justify-content-end align-items-center border-right">
              <p>Total value:</p>
            </div>
            <div class="col-md-6">
              <p>
                {articleCard && articleCard.value ? articleCard.value : "N/A"}
              </p>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4 d-flex justify-content-center align-items-center">
              <Link className="custom-link" to={`/products/1/analytics`}>
                <a class="btn btn-info">Analytics</a>
              </Link>
            </div>
            <div class="col-md-4"></div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
