import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getArticlesCard } from "../services/ArticleService";

export default function Product({ match }) {
  const [articleCard, setArticleCard] = useState(null);

  useEffect(() => {
    (async () => {
      debugger;
      setArticleCard(await getArticlesCard(match.params.articleId));
    })();
  }, []);

  // {
  //   "article": {
  //     "articleGroup": {
  //       "id": 0,
  //       "name": "string"
  //     },
  //     "id": 0,
  //     "name": "string",
  //     "unit": "PCS"
  //   },
  //   "inPrice": 0,
  //   "inQuantity": 0,
  //   "outPrice": 0,
  //   "outQuantity": 0,
  //   "price": 0,
  //   "quantity": 0,
  //   "startStatePrice": 0,
  //   "startStateQuantity": 0
  // }

  //console.log(articleCard);

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
