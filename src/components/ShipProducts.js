import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWarehouses } from "../services/WarehouseService";
import { getBusinessPartners } from "../services/BusinessPartnerService";
import { getArticlesCards, createDocument } from "../services/ArticleService";
import GenericPagination from './GenericPagination';


export default function OrderProducts() {
  const [warehouses, setWarehouses] = useState([]);
  const [businessPartners, setBusinessPartners] = useState([]);
  const [articlesToShipPage, setArticlesToShipPage] = useState([]);
  const [articlesToShip, setArticlesToShip] = useState([]);
  const [pickedArticleCards, setPickedArticleCards] = useState([]);

  const [selectedLocalWarehouse, setSelectedLocalWarehouse] = useState(1);
  const [selectedBusinessPartner, setSelectedBusinessPartner] = useState(1);
  
  useEffect(() => {
    (async () => {
      setWarehouses(await getWarehouses());
      setBusinessPartners(await getBusinessPartners());
      setArticlesToShip(await getArticlesCards(selectedLocalWarehouse));
    })();
  }, []);

  const setPagedData = (page) => {
    setArticlesToShipPage(page)
  }

  useEffect(() => {
    (async () => {
      setArticlesToShip(await getArticlesCards(selectedLocalWarehouse));
    })();
  }, [selectedLocalWarehouse])

  const renderOptions = data =>
    data.map(item => {
      return <option value={item.id}>{item.name}</option>;
    });

    const pickProduct = (target, id) => {
      const quantity = target.parentNode.previousSibling.firstChild.value; //Nenade ako vidis ovo, nemoj sta zamjeriti
      const price =
        target.parentNode.previousSibling.previousSibling.firstChild.value; //Nenade oprosti nam molim te
      const articleFromList = articlesToShip.find(article => article.article.id === id);
      const selectedArticle = { articleId: id, price, quantity, name : articleFromList.article.name };
      setPickedArticleCards([...pickedArticleCards, selectedArticle]);
    };

    const removeAddedArticle = (id) => {
      setPickedArticleCards(pickedArticleCards.filter(articleCard => articleCard.articleId !== id))
    }
  
    const renderArticles = () =>{
    if(!articlesToShipPage){
      return;
    }
    return articlesToShipPage.map((article, idx) => {
        return (
          <tr>
            <th scope="row">{idx + 1}</th>
            <td className="text-center">{article.article.name}</td>
            <td className="text-center">
              <input
                type="number"
                required
                min="1"
                className="form-control w-75"
                id="price_input"
                placeholder="Enter price"
              />
            </td>
            <td className="d-flex justify-content-center align-items-center">
              <input
                type="number"
                required
                min="1"
                max={article.quantity}
                className="form-control w-75"
                id="quantity_input"
                placeholder="Enter quantity"
              />
              ({article.quantity})
            </td>
            <td>
              <button
                className="btn btn-info"
                onClick={e => pickProduct(e.target, article.article.id)}
              >
                Add
              </button>
            </td>
          </tr>
        );
      });
    }

    const renderPickedArticles = () =>
      pickedArticleCards.map((article, i) => {
        return (
          <tr>
            <th scope="row">{i + 1}</th>
            <td className="text-center">{article.name}</td>
            <td className="text-center">{article.quantity}</td>
            <td className="text-center">{article.price}</td>
            <td className="text-center">{article.quantity * article.price}</td>
            <td>
            <button className="btn btn-info" onClick={() => removeAddedArticle(article.articleId)}>Remove</button>
            </td>
          </tr>
        );
      });

    const shipProducts = async () => {
      if (pickedArticleCards.length < 1) {
        window.alert("Pick at least one article!");
        return;
      }
    
      const order = {
        businessPartnerId: selectedBusinessPartner,
        documentItems: pickedArticleCards,
        sourceWarehouseId: selectedLocalWarehouse
      };      

      await createDocument(order);
      window.location.href = `/warehouses/${selectedLocalWarehouse}`;
    };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 p-0 bg-info">
          <div className="card">
            <div className="card-header d-flex justify-content-center align-items-center">
              {" "}
              Ship products
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-end border-right">
                  <h5 className="">Pick local warehouse:</h5>
                </div>
                <div className="col-md-6 d-flex">
                  <select 
                    className="w-50 rounded"
                    defaultValue={1}
                    onChange={e => setSelectedLocalWarehouse(e.target.value)}>
                    {renderOptions(warehouses)}
                  </select>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-end border-right">
                  <h5 className="">Pick business partner:</h5>
                </div>
                <div className="col-md-6 d-flex">
                  <select 
                    className="w-50 rounded"
                    defaultValue={1}
                    onChange={e => setSelectedBusinessPartner(e.target.value)}>
                    {renderOptions(businessPartners)}
                  </select>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header"> Pick products to ship:</div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12 d-flex justify-content-center align-items-center">
                          <form className="form-inline"></form>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <table className="table">
                            <thead className="thead-dark">
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col" className="text-center">
                                  Article name
                                </th>
                                <th scope="col" className="text-center">
                                  Unit price
                                </th>
                                <th scope="col" className="text-center">
                                  Quantity
                                </th>
                                <th scope="col" className="text-center">
                                  Quantity
                                </th>
                                <th scope="col"></th>
                              </tr>
                            </thead>
                            <tbody>
                              {renderArticles()}
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <GenericPagination data={articlesToShip} returnPage={setPagedData}/>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header"> Picked products:</div>
                    <div className="card-body">
                      <table className="table">
                        <thead className="thead-dark">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col" className="text-center">
                              Article name
                            </th>
                            <th scope="col" className="text-center">
                              Quantity
                            </th>
                            <th scope="col" className="text-center">
                              Unit price
                            </th>
                            <th
                              scope="col"
                              className="text-center"
                              contenteditable="true"
                            >
                              Total
                            </th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {renderPickedArticles()}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-12 d-flex justify-content-end align-items-center border-top p-1">
                <button class="btn btn-success" onClick={shipProducts}>
                    Ship products
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
