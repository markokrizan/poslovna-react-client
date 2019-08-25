import request from "./request";

const getAllArticleCards = async () =>
  await request({
    url: `/articles`,
    method: "GET"
  });

const getArticlesCards = async warehouseId =>
  await request({
    url: `/warehouses/${warehouseId}/article-cards`,
    method: "GET"
  });

const getArticlesCard = async articleCardId => {
  return await request({
    url: `/article-cards/${articleCardId}`,
    method: "GET"
  });
};

const orderArticles = async order => {
  return await request({
    url: "/documents",
    method: "POST",
    requestData: order
  });
};

export { getArticlesCards, getArticlesCard, getAllArticleCards, orderArticles };
