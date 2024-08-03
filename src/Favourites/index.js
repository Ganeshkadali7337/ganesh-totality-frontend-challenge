import Header from "../Header";
import PropertyCard from "../PropertyCard";
import "./index.css";

const Favourites = () => {
  const data = JSON.parse(localStorage.getItem("propertyData"));
  const filtered = data.filter((each) => each.liked === true);
  return (
    <div>
      <Header />
      <div className="fav-container">
        <h1 className="fav-head">Favourites</h1>
        <ul className="properties-list">
          {filtered.map((each) => (
            <PropertyCard hideLike={true} item={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Favourites;
