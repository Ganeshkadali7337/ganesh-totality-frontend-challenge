import CartContext from "../CartContext";

import { useContext } from "react";

import "./index.css";

const Checkout = () => {
  const { cartStateData } = useContext(CartContext);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  let totalCost = 0;

  cartStateData.forEach((each) => {
    totalCost = totalCost + each.price_per_month * each.booking_count;
  });

  return (
    <div className="checkout-main">
      <h1>Checkout</h1>
      <div className="checkout-container">
        <div className="input-fields">
          <form onSubmit={onSubmit}>
            <div className="name-check-container">
              <div className="input-cont">
                <label className="check-label" htmlFor="name">
                  Firstname:
                </label>
                <input className="name-el" id="name" type="text" />
              </div>
              <div className="input-cont">
                <label className="check-label" htmlFor="last">
                  Lastname:
                </label>
                <input className="name-el" id="last" type="text" />
              </div>
            </div>
            <div className="input-cont">
              <label className="check-label" htmlFor="Email">
                Email:
              </label>
              <input className="check-input" id="Email" type="text" />
            </div>
            <div className="input-cont">
              <label className="check-label" htmlFor="Mobile">
                Mobile:
              </label>
              <input className="check-input" id="Mobile" type="text" />
            </div>
            <div className="input-cont">
              <label className="check-label" htmlFor="City">
                City:
              </label>
              <input className="check-input" id="City" type="text" />
            </div>
            <ul className="cart-item-details">
              {cartStateData.map((each) => (
                <li className="check-li">
                  <p className="title-check">{each.title}</p>
                  <p>x{each.booking_count}</p>
                  <p>{each.price_per_month}/M</p>
                </li>
              ))}
            </ul>
            <div className="name-check-container">
              <p className="total-check">Total:</p>
              <p className="total-check">{totalCost}/Month</p>
            </div>
            <div className="payment-options">
              <img
                className="pay-icon"
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715509743/Group_136188_tbwing.svg"
                alt="payment-icon"
              />
              <img
                className="pay-icon"
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715509743/Group_136190_n7v5aj.svg"
                alt="payment-icon"
              />
              <img
                className="pay-icon"
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715509744/Group_136194_ryhh5x.svg"
                alt="payment-icon"
              />
              <img
                className="pay-icon"
                src="https://res.cloudinary.com/dzjz2ts9c/image/upload/v1715509743/Group_136192_jmtjmz.svg"
                alt="payment-icon"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
