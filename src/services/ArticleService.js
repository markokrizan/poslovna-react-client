import request from "./request";

const getArticlesCards = async warehouseId =>
  await request({
    url: `/warehouses/${warehouseId}/article-cards`,
    method: "GET"
  });

const getArticlesCard = async articleCardId => {
  await request({
    url: `/article-cards/${articleCardId}`,
    method: "GET"
  });
};

export { getArticlesCards, getArticlesCard };
