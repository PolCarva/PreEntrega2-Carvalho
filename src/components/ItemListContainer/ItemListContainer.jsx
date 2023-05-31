import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { idCategoria } = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria
      ? getProductosPorCategoria
      : getProductos;

    setIsLoading(true);

    funcionProductos(idCategoria)
      .then((r) => {
        setProductos(r);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error("Error obteniendo productos: ", e);
        setIsLoading(false);
      });
  }, [idCategoria]);

  return <>{isLoading ? <Loader /> : <ItemList productos={productos} />}</>;
};

export default ItemListContainer;
