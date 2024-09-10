const FiltredBtns = () => {
  return (
    <div className="filter-buttons-container">
      <button
        className="filter-button active"
        onClick={() => {
          const allRestaurant = resList;
          setListOfReastaurant(allRestaurant);
        }}
      >
        📋 All
      </button>

      <button
        className="filter-button "
        onClick={() => {
          const filtreByAvg = ListOfRestaurant.filter(
            (res) => res.data.avgRating > 4
          );
          setListOfReastaurant(filtreByAvg);
        }}
      >
        ★ Top Rated
      </button>

      <button
        className="filter-button"
        onClick={() => {
          const filtredByPrice = ListOfRestaurant.filter(
            (res) => res.data.costForTwo / 100 >= 500
          );
          setListOfReastaurant(filtredByPrice);
        }}
      >
        💲 Price
      </button>

      <button
        className="filter-button"
        onClick={() => {
          const filteredByDeliveryTime = ListOfRestaurant.filter(
            (res) => res.data.deliveryTime <= 30
          );
          setListOfReastaurant(filteredByDeliveryTime);
        }}
      >
        ⏰ Delivery Time
      </button>
    </div>
  );
};

export default FiltredBtns;
