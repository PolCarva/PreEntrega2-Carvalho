import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import { useParams } from "react-router-dom";

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

  return (
    <>
      {isLoading ? (
        <div className="d-flex flex-column justify-content-center align-items-center mt-5 pt-5">
          <div className="spinner-border" role="status">
          </div>
            <span className="mt-4">Loading...</span>
        </div>
      ) : (
        <ItemList productos={productos} />
      )}
    </>
  );
};


export default ItemListContainer;
