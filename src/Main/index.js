import Header from "../Header";

import PropertyCard from "../PropertyCard";

import "./index.css";

import PropertyFiltersHeader from "../PropertyFlitersHeader";

import CartContext from "../CartContext";

import { useContext } from "react";

const Main = () => {
  const {
    propertyStateData,
    filterShow,
    amenities,
    price,
    isCheckedParking,
    isCheckedGym,
    isCheckedAc,
    isCheckedWifi,
    onFilterAc,
    onFilterGym,
    onFilterParking,
    onFilterWifi,
  } = useContext(CartContext);

  const data =
    amenities.length === 0
      ? propertyStateData
      : propertyStateData.filter((property) =>
          amenities.every((amenity) => property.amenities.includes(amenity))
        );
  console.log(data);
  const sortedpropertyData =
    price === "low"
      ? data.sort((a, b) => a.price_per_month - b.price_per_month)
      : data.sort((a, b) => b.price_per_month - a.price_per_month);

  const onChangeFilterAc = (e) => {
    onFilterAc(e);
  };

  const onChangeFilterGym = (e) => {
    onFilterGym(e);
  };

  const onChangeFilterParking = (e) => {
    onFilterParking(e);
  };

  const onChangeFilterWifi = (e) => {
    onFilterWifi(e);
  };

  return (
    <div>
      <div className="main-bg-container">
        <Header />
        <div className="content">
          <h1 className="text-heading">TOP RENTALS FOR YOU</h1>
          <p className="text-para">
            Welcome to Property Rental, where finding your next home is easy and
            enjoyable. Our comprehensive property rental platform offers a
            diverse range of properties to suit all tastes and budgets.
          </p>
        </div>
        <div className="properties-main-list-container">
          <PropertyFiltersHeader count={sortedpropertyData.length} />
        </div>
        <div className="properties-and-filters-container">
          {filterShow && (
            <div className="filters-list-container">
              <div className="filter">
                <p className="filter-name">AMENITIES</p>
                <div className="checkbox-container">
                  <div className="check">
                    <input
                      checked={isCheckedAc}
                      onChange={onChangeFilterAc}
                      id="Air Conditioning"
                      type="checkbox"
                    />
                    <label htmlFor="men">Air Conditioning</label>
                  </div>
                  <div className="check">
                    <input
                      checked={isCheckedGym}
                      onChange={onChangeFilterGym}
                      id="Gym"
                      type="checkbox"
                    />
                    <label htmlFor="women">Gym</label>
                  </div>
                  <div className="check">
                    <input
                      checked={isCheckedParking}
                      onChange={onChangeFilterParking}
                      id="Parking"
                      type="checkbox"
                    />
                    <label htmlFor="kids">Parking</label>
                  </div>
                  <div className="check">
                    <input
                      checked={isCheckedWifi}
                      onChange={onChangeFilterWifi}
                      id="Wifi"
                      type="checkbox"
                    />
                    <label htmlFor="kids">Wifi</label>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="properties-container">
            <ul className="properties-list">
              {sortedpropertyData.map((each) => (
                <PropertyCard item={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
