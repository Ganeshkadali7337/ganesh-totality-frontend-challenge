import { BsHeart } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { useContext } from "react";

import { Link, withRouter } from "react-router-dom/";

import CartContext from "../CartContext";

import "./index.css";

const PropertyCard = (props) => {
  const { item, hideLike } = props;
  const { id, title, image, liked, description, price_per_month, location } =
    item;

  const { booked, onAddToCart, onLiked } = useContext(CartContext);

  const onClickLiked = () => {
    onLiked(id);
  };

  const onClickBooknow = () => {
    onAddToCart(id);
  };

  const onGoToCart = () => {
    const { history } = props;
    history.push("/cart");
  };

  return (
    <li className="list-item-container">
      <img className="property-img" src={image} alt={title} />
      <div className="property-content">
        <div className="name-container">
          <p className="property-name">{title}</p>
          {liked ? (
            <button
              onClick={onClickLiked}
              className={hideLike ? "hide" : "like-button"}
            >
              <GoHeartFill className="heart-filled" />
            </button>
          ) : (
            <button
              onClick={onClickLiked}
              className={hideLike ? "hide" : "like-button"}
            >
              <BsHeart className="heart" />
            </button>
          )}
        </div>
        <p className="property-para">{description}</p>
        <div>
          <p className="price">{price_per_month} Rs/Month</p>
          <div className="name-container">
            <p className="location">
              <CiLocationOn />
              {location}
            </p>
            <Link to={`/property-details/${id}`}>
              <button className="book-btn">
                More Details
                <FaArrowRightLong />
              </button>
            </Link>
          </div>
          {item.status || booked.includes(id) ? (
            <button onClick={onGoToCart} className="booknow-btn">
              Go To Cart
            </button>
          ) : (
            <button onClick={onClickBooknow} className="booknow-btn">
              Book Now
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default withRouter(PropertyCard);
