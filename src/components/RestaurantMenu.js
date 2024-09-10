import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerMenu from "./ShimmerMenu";
import { IMG_URL } from "../utils/constants";
import { FiClock, FiMapPin, FiDollarSign } from "react-icons/fi";
import { AiOutlineStar } from "react-icons/ai";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [openCategoryIndex, setOpenCategoryIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenCategoryIndex(openCategoryIndex === index ? null : index);
  };

  if (resInfo === null) return <ShimmerMenu />;

  const {
    name = "Unknown Restaurant",
    cuisines = [],
    costForTwoMessage = "Cost for Two: Unknown",
    cloudinaryImageId = "",
    avgRating = "N/A",
    sla = {},
    badges = {},
    aggregatedDiscountInfo = {},
    areaName = "Unknown Area",
    totalRatingsString = "No ratings",
  } = resInfo?.cards[2]?.card?.card?.info || {};
  console.log(resInfo?.cards[2]?.card?.card?.info);
  const {
    deliveryTime = "Unavailable",
    lastMileTravelString = "Unknown distance",
  } = sla;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="bg-gray-100 min-h-screen py-28 pb-14 mt-22">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex items-center">
              <img
                className="h-20 w-20 rounded-full object-cover mr-4"
                src={IMG_URL + cloudinaryImageId}
                alt={name}
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">{name}</h1>
                <p className="text-sm text-gray-500">{cuisines.join(" • ")}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="flex items-center">
                <FiMapPin className="text-gray-400 mr-1" />
                <span className="text-gray-500">{areaName}</span>
              </div>
              <div className="flex items-center">
                <FiDollarSign className="text-gray-400 mr-1" />
                <span className="text-gray-500">{costForTwoMessage}</span>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                <AiOutlineStar className="mr-1" />
                {avgRating} | {totalRatingsString}
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                <FiClock className="mr-1" />
                {deliveryTime} mins
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                {lastMileTravelString}
              </span>
            </div>
          </div>
          {badges && badges.imageBased && (
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
              <div className="flex space-x-2">
                {badges.imageBased.badges.map((badge, idx) => (
                  <img
                    key={idx}
                    src={badge.imageUrl}
                    alt={badge.description}
                    className="h-6 w-6"
                  />
                ))}
              </div>
            </div>
          )}
          {aggregatedDiscountInfo?.header && (
            <div className="px-6 py-3 bg-green-50 border-t border-green-200">
              <p className="text-sm font-medium text-green-800">
                {aggregatedDiscountInfo.header}
              </p>
              <p className="mt-1 text-xs text-green-700">
                {aggregatedDiscountInfo.shortDescriptionList
                  .map((item) => item.meta)
                  .join(", ")}
              </p>
            </div>
          )}
        </div>
        <div className="mt-6 space-y-6">
          {categories.map((category, index) => (
            <RestaurantCategory
              key={category.card.card.title}
              data={category?.card?.card}
              isOpen={openCategoryIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
