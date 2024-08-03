import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Component } from "react";

import Main from "./Main";

import PropertyDetails from "./PropertyDetails";

import Favourites from "./Favourites";

import Cart from "./Cart";

import CartContext from "./CartContext";

import PropertyData from "./propertyData";

import Checkout from "./Checkout";

import "./App.css";

class App extends Component {
  state = {
    booked: [],
    cartStateData: [],
    propertyStateData: [],
    filterShow: false,
    amenities: [],
    price: "low",
    isCheckedAc: false,
    isCheckedGym: false,
    isCheckedParking: false,
    isCheckedWifi: false,
    liked: false,
  };

  onAddToCart = (id) => {
    const { booked, cartStateData } = this.state;
    this.setState({ booked: [...booked, id] });
    const properties = JSON.parse(localStorage.getItem("propertyData"));
    const filtered = properties.map((each) =>
      each.id === parseInt(id) ? { ...each, status: "booked" } : each
    );
    this.setState({ propertyStateData: filtered }, this.savePropertyData);

    const property = properties.find((each) => each.id === parseInt(id));
    this.setState(
      {
        cartStateData: [
          ...cartStateData,
          { ...property, booking_count: 1, booking_date: new Date() },
        ],
      },
      this.saveCartData
    );
  };

  onIncrementCartItem = (id) => {
    const { cartStateData } = this.state;
    const filtered = cartStateData.map((each) =>
      each.id === parseInt(id)
        ? { ...each, booking_count: each.booking_count + 1 }
        : each
    );
    this.setState({ cartStateData: filtered }, this.saveCartData);
  };

  onDecrementCartItem = (id) => {
    const { cartStateData } = this.state;
    const item = cartStateData.find((each) => each.id === parseInt(id));
    if (item.booking_count > 1) {
      const filtered = cartStateData.map((each) =>
        each.id === parseInt(id)
          ? {
              ...each,
              booking_count: each.booking_count - 1,
            }
          : each
      );
      this.setState({ cartStateData: filtered }, this.saveCartData);
    }
  };

  onDeleteCartItem = (id) => {
    const { cartStateData, booked } = this.state;
    const filtered = cartStateData.filter((each) => each.id !== parseInt(id));
    this.setState({ cartStateData: filtered }, this.saveCartData);

    const properties = JSON.parse(localStorage.getItem("propertyData"));
    const filteredProperties = properties.map((each) =>
      each.id === parseInt(id) ? { ...each, status: null } : each
    );

    this.setState(
      { propertyStateData: filteredProperties },
      this.savePropertyData
    );

    this.setState({
      booked: [booked.filter((each) => each.id !== parseInt(id))],
    });
  };

  onLiked = (id) => {
    const { propertyStateData } = this.state;
    const updatedPropertyData = propertyStateData.map((each) =>
      each.id === parseInt(id) ? { ...each, liked: !each.liked } : each
    );
    this.setState(
      { propertyStateData: updatedPropertyData },
      this.savePropertyData
    );
  };

  onClickFilters = () => {
    const { filterShow } = this.state;
    this.setState({ filterShow: !filterShow });
  };

  filterData = () => {};

  onFilterAc = (e) => {
    const checked = e.target.checked;
    const { amenities } = this.state;
    if (checked) {
      this.setState(
        { amenities: [...amenities, "Air Conditioning"], isCheckedAc: true },
        this.filterData
      );
    } else {
      const index = amenities.indexOf("Air Conditioning");
      amenities.splice(index, 1);
      this.setState(
        { amenities: [...amenities], isCheckedAc: false },
        this.filterData
      );
    }
  };

  onFilterGym = (e) => {
    const checked = e.target.checked;
    const { amenities } = this.state;
    if (checked) {
      this.setState(
        { amenities: [...amenities, "Gym"], isCheckedGym: true },
        this.filterData
      );
    } else {
      const index = amenities.indexOf("Gym");
      amenities.splice(index, 1);
      this.setState(
        { amenities: [...amenities], isCheckedGym: false },
        this.filterData
      );
    }
  };

  onFilterParking = (e) => {
    const checked = e.target.checked;
    const { amenities } = this.state;
    if (checked) {
      this.setState(
        { amenities: [...amenities, "Parking"], isCheckedParking: true },
        this.filterData
      );
    } else {
      const index = amenities.indexOf("Parking");
      amenities.splice(index, 1);
      this.setState(
        { amenities: [...amenities], isCheckedParking: false },
        this.filterData
      );
    }
  };

  onFilterWifi = (e) => {
    const checked = e.target.checked;
    const { amenities } = this.state;
    if (checked) {
      this.setState(
        { amenities: [...amenities, "WiFi"], isCheckedWifi: true },
        this.filterData
      );
    } else {
      const index = amenities.indexOf("WiFi");
      amenities.splice(index, 1);
      this.setState(
        { amenities: [...amenities], isCheckedWifi: false },
        this.filterData
      );
    }
  };

  changePrice = (value) => {
    this.setState({ price: value }, this.getData);
  };

  saveCartData = () => {
    const { cartStateData } = this.state;
    localStorage.setItem("userCart", JSON.stringify(cartStateData));
  };

  savePropertyData = () => {
    const { propertyStateData } = this.state;
    localStorage.setItem("propertyData", JSON.stringify(propertyStateData));
  };

  componentDidMount() {
    const cartData = JSON.parse(localStorage.getItem("userCart"));
    const savedData = JSON.parse(localStorage.getItem("propertyData"));
    if (cartData) {
      this.setState({ cartStateData: cartData }, this.saveCartData);
    }
    if (savedData) {
      this.setState({ propertyStateData: savedData }, this.savePropertyData);
    } else {
      this.setState({ propertyStateData: PropertyData }, this.savePropertyData);
    }
  }

  render() {
    const {
      booked,
      cartStateData,
      propertyStateData,
      amenities,
      price,
      isCheckedAc,
      isCheckedGym,
      isCheckedParking,
      isCheckedWifi,
      filterShow,
      liked,
    } = this.state;

    return (
      <CartContext.Provider
        value={{
          booked,
          cartStateData,
          propertyStateData,
          filterShow,
          amenities,
          price,
          isCheckedAc,
          isCheckedGym,
          isCheckedParking,
          isCheckedWifi,
          liked,
          onAddToCart: this.onAddToCart,
          onIncrementCartItem: this.onIncrementCartItem,
          onDecrementCartItem: this.onDecrementCartItem,
          onDeleteCartItem: this.onDeleteCartItem,
          onLiked: this.onLiked,
          onClickFilters: this.onClickFilters,
          onFilterAc: this.onFilterAc,
          onFilterGym: this.onFilterGym,
          onFilterParking: this.onFilterParking,
          onFilterWifi: this.onFilterWifi,
          changePrice: this.changePrice,
        }}
      >
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/property-details/:id" component={PropertyDetails} />
            <Route path="/favourites" component={Favourites} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </Router>
      </CartContext.Provider>
    );
  }
}

export default App;
