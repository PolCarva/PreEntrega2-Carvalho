import "./ItemDetail.css";

import React, { useState } from "react";

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [count, setCount] = useState(1);

  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrementar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const validateCount = (e) => {
    const value = e.target.value;
    if (value === "") {
      setCount(value);
    } else {
      const intValue = parseInt(value);
      if (intValue < 1) {
        setCount(1);
      } else if (intValue > stock) {
        setCount(stock);
      } else {
        setCount(intValue);
      }
    }
  };

  const validateOut = (e) => {
    if (e.target.value === "") {
        setCount(1);
    }
};

  return (
    <section className="detailContainer">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img className="card-img-top img-detail mb-5 mb-md-0" src={img} alt={nombre} />
          </div>
          <div className="col-md-6">
            <div className="small mb-1 text-body-tertiary">Item Id: {id}</div>
            <h1 className="display-5 fw-bolder">{nombre}</h1>
            <div className="fs-5 mb-5">
              <span className="price">$ {precio}</span>
            </div>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium at dolorem quidem modi. Nam sequi consequatur
              obcaecati excepturi alias magni, accusamus eius blanditiis
              delectus ipsam minima ea iste laborum vero?
            </p>
            <div className="d-flex">
              <button className="btn btn-main me-2" onClick={decrementar}>
                {" "}
                -{" "}
              </button>

              <input
                className="form-control text-center me-3"
                id="inputQuantity"
                type="text"
                value={count}
                onChange={validateCount}
                onBlur={validateOut}

              />
              <button className="btn btn-main me-2" onClick={incrementar}>
                {" "}
                +{" "}
              </button>
              <button
                className="btn outlined-btn flex-shrink-0 text-uppercase color-main col-4"
                type="button"
              >
                <i className="bi-cart-fill me-1" />
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
