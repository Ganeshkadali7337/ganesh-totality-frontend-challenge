import React from "react";

const CartContext = React.createContext({
  booked: null,
  cartStateData: null,
  propertyStateData: null,
  onAddToCart: () => {},
  onIncrementCartItem: () => {},
  onDecrementCartItem: () => {},
  onDeleteCartItem: () => {},
  onLiked: () => {},
  onClickFilters: () => {},
  onFilterAc: () => {},
  onFilterGym: () => {},
  onFilterParking: () => {},
  onFilterWifi: () => {},
  changePrice: () => {},
});

export default CartContext;
