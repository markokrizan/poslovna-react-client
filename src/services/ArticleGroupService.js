import request from "./request";

const getArticleGroups = async () =>
  await request({
    url: `/article-groups`,
    method: "GET"
  });

const getArticleGroupArticles = async (warehouseId, articleGroupId) =>
  await request({
    url: `/warehouses/${warehouseId}/article-groups/${articleGroupId}/article-cards`,
    method: "GET"
  });

export { getArticleGroups, getArticleGroupArticles };
