import React, { useEffect, useState } from "react";
import { getWarehouses } from "../services/WarehouseService";
import { getArticlesCards, createDocument } from "../services/ArticleService";
import GenericPagination from './GenericPagination';

export default function OrderProducts() {
  const [warehouses, setWarehouses] = useState([]);

  const [selectedFromWarehouse, setSelectedFromWarehouse] = useState(1);
  const [selectedToWarehouse, setSelectedToWarehouse] = useState(1);

  const [productsToTransfer, setProductsToTransfer] = useState([]);
  const [productsToTransferPage, setProductsToTransferPage] = useState([]);
  const [pickedArticleCards, setPickedArticleCards] = useState([]);

  useEffect(() => {
    (async () => {
      setWarehouses(await getWarehouses());
      setProductsToTransfer(await getArticlesCards(selectedFromWarehouse));
    })();
  }, []);

  const setPagedData = (page) => {
    setProductsToTransferPage(page)
  }

  useEffect(() => {
    (async () => {
      setProductsToTransfer(await getArticlesCards(selectedFromWarehouse));
    })();
  }, [selectedFromWarehouse])

  const renderWarehouses = () =>
    warehouses.map(warehouse => {
      return <option value={warehouse.id}>{warehouse.name}</option>;
    });

    const renderArticles = () => {
      if(!productsToTransferPage){
        return
      }
      return productsToTransferPage.map((article, idx) => {
          return (
            <tr>
              <th scope="row">{idx + 1}</th>
              <td className="text-center">{article.article.name}</td>
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

      const removeAddedArticle = (id) => {
        setPickedArticleCards(pickedArticleCards.filter(articleCard => articleCard.articleId !== id))
      }
  
    const renderPickedArticles = () =>
      pickedArticleCards.map((article, i) => {
        return (
          <tr>
            <th scope="row">{i + 1}</th>
            <td className="text-center">{article.name}</td>
            <td className="text-center">{article.quantity}</td>
            <td>
            <button className="btn btn-info" onClick={() => removeAddedArticle(article.articleId)}>Remove</button>
            </td>
          </tr>
        );
      });

      const pickProduct = (target, id) => {
        const quantity = target.parentNode.previousSibling.firstChild.value; //Nenade ako vidis ovo, nemoj sta zamjeriti
        const price =
          target.parentNode.previousSibling.previousSibling.firstChild.value; //Nenade oprosti nam molim te
        const articleFromList = productsToTransfer.find(article => article.article.id === id);
        const selectedArticle = { articleId: id, quantity : parseInt(quantity), name : articleFromList.article.name };
        setPickedArticleCards([...pickedArticleCards, selectedArticle]);
      };

      const transferProducts = async () => {
        if (pickedArticleCards.length < 1) {
          window.alert("Pick at least one article!");
          return;
        }

        if(selectedToWarehouse === selectedFromWarehouse){
          window.alert("Pick different warehouses!");
          return;
        }


        const order = {
          targetWarehouseId: parseInt(selectedToWarehouse),
          documentItems: pickedArticleCards,
          sourceWarehouseId: parseInt(selectedFromWarehouse)
        };      
        
        await createDocument(order);

        window.location.href = `/warehouses/${selectedToWarehouse}`;
      };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 p-0 bg-info">
          <div className="card">
            <div className="card-header d-flex justify-content-center align-items-center">
              {" "}
              In house tranzit
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-end border-right">
                  <h5 className="">From warehouse:</h5>
                </div>
                <div className="col-md-6 d-flex">
                  <select 
                    className="w-50 rounded"
                    defaultValue={1}
                    onChange={e => setSelectedFromWarehouse(e.target.value)}>{renderWarehouses()}>
                  </select>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-end border-right">
                  <h5 className="">To warehouse:</h5>
                </div>
                <div className="col-md-6 d-flex">
                  <select 
                    className="w-50 rounded"
                    defaultValue={1}
                    onChange={e => setSelectedToWarehouse(e.target.value)}>
                    {renderWarehouses()}</select>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-header"> Pick products to transfer:</div>
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
                                  Availible quantity
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
                      <GenericPagination data={productsToTransfer} returnPage={setPagedData}/>
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
                  <button class="btn btn-success" onClick={transferProducts}>
                    Transfer products
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
