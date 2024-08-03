import { GoHeartFill } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { BsHeart } from "react-icons/bs";

import { useContext } from "react";

import CartContext from "../CartContext";

import Header from "../Header";

import "./index.css";

const PropertyDetails = (props) => {
  const { match } = props;
  const { params } = match;
  const { id } = params;

  const { propertyStateData, onLiked, onAddToCart, booked } =
    useContext(CartContext);

  const onClickLiked = () => {
    onLiked(id);
  };

  const property = propertyStateData.find((each) => each.id === parseInt(id));

  const onClickBooknow = () => {
    onAddToCart(id);
  };

  const onGoToCart = () => {
    const { history } = props;
    history.push("/cart");
  };

  if (property) {
    return (
      <div className="details-container">
        <Header />
        <div className="details">
          <img
            className="img-details"
            src={property.image}
            alt={property.title}
          />
          <div className={`property-content property-content-details`}>
            <div className="name-container">
              <p className="property-name-details">{property.title}</p>
              {property.liked ? (
                <button onClick={onClickLiked} className="like-button">
                  <GoHeartFill
                    className={`heart-filled heart-filled-details`}
                  />
                </button>
              ) : (
                <button onClick={onClickLiked} className="like-button">
                  <BsHeart className={`heart heart-details`} />
                </button>
              )}
            </div>
            <p className="property-para-details">{property.description}</p>
            <p className="amenities-head">Amenities:</p>
            <p className="amenities">
              {property.amenities.map((each) => (
                <span key={each.id} className="amenite-span">
                  {each}
                </span>
              ))}
            </p>
            <p className="bedrooms">Bedrooms: {property.bedrooms}</p>
            <div>
              <p className="price-details">
                {property.price_per_month} Rs/Month
              </p>
              <div className="name-container">
                <p className="location-details">
                  <CiLocationOn />
                  {property.location}
                </p>
              </div>
              <p className="address">Address: {property.address}</p>
            </div>
            {property.status || booked.includes(id) ? (
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
      </div>
    );
  }
};

export default PropertyDetails;
