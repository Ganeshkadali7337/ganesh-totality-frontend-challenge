import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./index.css";

const Header = () => (
  <div className="main">
    <div className="nav">
      <Link className="link" to="/">
        <h1 className="heading-logo">Property Rental</h1>
      </Link>
      <div className="cart-container">
        <Link className="link" to="/favourites">
          <IoHeartOutline />
        </Link>
        <Link className="link" to="/cart">
          <AiOutlineShoppingCart />
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
