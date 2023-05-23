import "./CartWidget.css";

const CartWidget = () => {
  return (
    <div className="cartWidget-container">
      <i className="bi-cart-fill me-1 fs-1 carro" />
      <strong className="carritoCount"> 3 </strong>
    </div>
  );
};

export default CartWidget;
