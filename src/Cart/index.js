import Header from "../Header";

import CartPropertyCard from "../CartPropertyCard";

import { useContext } from "react";

import CartContext from "../CartContext";

import "./index.css";

const Cart = (props) => {
  const { cartStateData } = useContext(CartContext);
  let totalCost = 0;

  cartStateData.forEach((each) => {
    totalCost = totalCost + each.price_per_month * each.booking_count;
  });

  let bookingCount = 0;

  cartStateData.forEach((each) => {
    bookingCount = bookingCount + each.booking_count;
  });

  const onClickCheckout = () => {
    const { history } = props;
    history.push("/checkout");
  };

  return (
    <div className="cart-main">
      <Header />
      <div className="cart-content-container">
        <h1 className="cart-head">Booked Properties</h1>
        <ul className="cart-properties-list">
          {cartStateData.map((each) => (
            <CartPropertyCard hideLike={true} item={each} key={each.id} />
          ))}
        </ul>
        <div className="checkout-cart-container">
          <div className="count-cont">
            <div>
              <p className="check-count">Count: {bookingCount}</p>
              <p className="check-count">Total Cost: {totalCost}/Month</p>
            </div>
            <button onClick={onClickCheckout} className="check-btn">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
