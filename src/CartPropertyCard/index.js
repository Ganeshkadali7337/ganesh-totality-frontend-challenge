import { FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";

import { useContext } from "react";

import { Link } from "react-router-dom/";

import CartContext from "../CartContext";

import "./index.css";

const CartPropertyCard = (props) => {
  const { item } = props;
  const { id, title, image, booking_count, price_per_month, booking_date } =
    item;

  const { onIncrementCartItem, onDecrementCartItem, onDeleteCartItem } =
    useContext(CartContext);

  const onIncrement = () => {
    onIncrementCartItem(id);
  };

  const onDecrement = () => {
    onDecrementCartItem(id);
  };

  const onDelete = () => {
    onDeleteCartItem(id);
  };

  return (
    <li className="cart-content-main">
      <img src={image} alt={title} className="cart-img" />
      <div className="cart-details">
        <p className="cart-property-name">{title}</p>
        <p className="cart-item-price">{price_per_month} Rs/Month</p>
        <div className="cart-row-container">
          <p className="date">Booked: {`${booking_date}`.split("T")[0]}</p>
          <Link to={`/property-details/${id}`}>
            <button className="cart-book-btn">
              Details
              <FaArrowRightLong />
            </button>
          </Link>
        </div>
        <div className="cart-row-container">
          <div className="increment-container">
            <button onClick={onDecrement} className="inc-btn">
              -
            </button>
            <p className="count">{booking_count}</p>
            <button onClick={onIncrement} className="inc-btn">
              +
            </button>
          </div>
          <AiOutlineDelete onClick={onDelete} className="delete" />
        </div>
      </div>
    </li>
  );
};

export default CartPropertyCard;
