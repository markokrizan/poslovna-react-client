import React, { useState, useEffect } from "react";
import WarehouseList from "../components/WarehouseList";
import Warehouse from "../components/Warehouse";
import { getWarehouses } from "../services/WarehouseService";
import { getArticleGroups } from "../services/ArticleGroupService";

export default function Warehouses({ match }) {
  const [warehouses, setWarehouses] = useState([]);
  const [articleGroups, setArticleGroups] = useState([]);

  useEffect(() => {
    (async () => {
      setWarehouses(await getWarehouses());
      setArticleGroups(await getArticleGroups());
    })();
  }, []);

  return (
    <div className="row">
      {/* Check if there is a number at the end, render that particular warehouse */}
      <WarehouseList warehouses={warehouses} />
      <Warehouse warehouseId={match.params.id} articleGroups={articleGroups} />
    </div>
  );
}
