import React from "react";
import { IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 ease-in-out hover:scale-105 w-82 cursor-pointer flex flex-col">
      <div className="relative">
        <img
          src={`${IMG_URL}/${resData.info.cloudinaryImageId}`}
          alt={name}
          className="w-full h-48 object-cover border-b border-gray-200"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs py-1 px-2 rounded">
          Quick View
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        {/* Restaurant Name with truncation */}
        <h3 className="text-lg font-bold mb-2 text-ellipsis overflow-hidden whitespace-nowrap">
          {name}
        </h3>

        {/* Cuisines with word break and ellipsis */}
        <p className="text-sm text-gray-600 mb-3 overflow-hidden text-ellipsis whitespace-nowrap break-words">
          {cuisines.join(", ")}
        </p>

        <div className="mt-auto flex items-center text-sm text-gray-700">
          <span
            className={`font-bold text-white py-0.5 px-1.5 rounded mr-2 ${
              avgRating >= 4.4
                ? "bg-green-500"
                : avgRating >= 3.8
                ? "bg-orange-500"
                : "bg-red-500"
            }`}
          >
            {avgRating} ★
          </span>
          <span className="text-gray-400 mx-2">|</span>
          <span className="font-medium">{sla.slaString}</span>
          <span className="text-gray-400 mx-2">|</span>
          <span className="font-medium">{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  //This returns RestaurantCardPromoted component where it receives props sent from Body.js
  //{...props} => passing extra components to RestaurantCard
  return (props) => {
    //returning another component(RestaurantCardPromoted) which can be accessed by withPromotedLabel()
    return (
      <div>
        <label className="absolute w-30 bg-black text-slate-200 m-3 ml-8 mt-4 p-1 rounded-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
