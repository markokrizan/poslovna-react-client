import request from "./request";

const getWarehouses = async () =>
  await request({
    url: `/warehouses`,
    method: "GET"
  });

const getWarehouse = async warehouseId =>
  await request({
    url: `/warehouses/${warehouseId}`,
    method: "GET"
  });

export { getWarehouses, getWarehouse };
