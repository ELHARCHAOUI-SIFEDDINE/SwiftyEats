import React, { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { RestaurantApi_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RestaurantApi_URL);
    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchedRestaurant = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(searchedRestaurant);
  };

  const handleFilter = (filterType) => {
    setActiveFilter(filterType);
    let filteredList = [];
    switch (filterType) {
      case "topRated":
        filteredList = listOfRestaurants.filter(
          (res) => res.info.avgRating > 4.4
        );
        break;
      case "highPrice":
        filteredList = listOfRestaurants.filter((res) => {
          // Extract the numeric part from the 'costForTwo' string
          const costString = res.info.costForTwo;
          const costMatch = costString.match(/(\d+)/); // Extract the numeric part using regex

          if (costMatch) {
            const cost = parseInt(costMatch[0], 10); // Convert the extracted string to an integer
            return cost > 350; // Set your threshold for high price
          }

          return false; // Return false if cost couldn't be extracted
        });
        break;

      case "lowPrice":
        filteredList = listOfRestaurants.filter((res) => {
          const costString = res.info.costForTwo;
          const costMatch = costString.match(/(\d+)/); // Extract the numeric part using regex

          if (costMatch) {
            const cost = parseInt(costMatch[0], 10); // Convert the extracted string to an integer
            return cost <= 350; // Set your threshold for low price
          }

          return false; // Return false if cost couldn't be extracted
        });

      case "fastDelivery":
        filteredList = listOfRestaurants.filter(
          (res) => res.info.sla.deliveryTime <= 25
        );
        break;
      default:
        filteredList = listOfRestaurants;
    }
    setFilteredRestaurant(filteredList);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-5 bg-gray-100 mt-8">
      <div className="flex justify-center mt-20">
        <form
          onSubmit={handleSearch}
          className="flex items-center w-full max-w-xl bg-white rounded-full shadow-lg overflow-hidden"
        >
          <input
            type="text"
            className="border-none p-2.5 text-base w-full rounded-full outline-none"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for restaurants..."
          />
          <button
            type="submit"
            className="bg-orange-600 border-none p-2.5 cursor-pointer rounded-full text-white flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23 21l-6.65-6.65a8.5 8.5 0 1 0-1.42 1.42L21 21l2-2zM9 16a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" />
            </svg>
          </button>
        </form>
      </div>

      <div className="flex justify-center mt-10 flex-wrap gap-2.5">
        <button
          className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-orange-600 hover:text-white"
          onClick={() => handleFilter("all")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="mr-2.5"
          >
            <path d="M12 4a1 1 0 0 1 1 1v8.586l4.293 4.293a1 1 0 0 1-1.414 1.414L12 14.414l-4.879 4.879a1 1 0 0 1-1.414-1.414L11 13.586V6a1 1 0 0 1 1-1z" />
          </svg>
          All
        </button>
        <button
          className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-orange-600 hover:text-white"
          onClick={() => handleFilter("topRated")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="mr-2.5"
          >
            <path d="M12 1l3.09 6.26L22 8.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 13.14 2 8.27l6.91-1L12 1z" />
          </svg>
          Top Rated
        </button>
        <button
          className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-orange-600 hover:text-white"
          onClick={() => handleFilter("highPrice")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="mr-2.5"
          >
            <path d="M19 13H5v-2h14v2zM5 9h14V7H5v2zm14-4v2H5V5h14z" />
          </svg>
          High Price
        </button>
        <button
          className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-orange-600 hover:text-white"
          onClick={() => handleFilter("lowPrice")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="mr-2.5"
          >
            <path d="M7 10h10v2H7v-2zm0 4h10v2H7v-2zm0-8v2h10V6H7zm14-4v2H3V2h18zm0 16H3v2h18v-2z" />
          </svg>
          Low Price
        </button>
        <button
          className="flex items-center bg-white border border-gray-300 px-4 py-2 rounded-full cursor-pointer transition duration-300 ease-in-out hover:bg-orange-600 hover:text-white"
          onClick={() => handleFilter("fastDelivery")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="mr-2.5"
          >
            <path d="M6 3h12l2 5v11H4V8l2-5zm2 0v1h8V3H8zm8 11H8v-1h8v1zm-6-4h4v-1H10v1z" />
          </svg>
          Fast Delivery
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-16 ">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
            className="no-underline text-inherit block hover:no-underline"
          >
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
