import React from "react";
import { IMG_URL } from "../utils/constants";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };
  return (
    <div className="space-y-8">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100"
        >
          <div className="flex">
            <div className="w-2/3 p-6">
              <div className="flex items-center mb-2">
                <h3 className="text-xl font-bold text-gray-900 mr-2">
                  {item.card.info.name}
                </h3>
                {item.card.info.ratings && (
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded flex items-center">
                    <AiFillStar className="mr-1" />
                    {item.card.info.ratings.aggregatedRating.rating}
                  </span>
                )}
              </div>
              <p className="text-lg font-semibold text-orange-500 mb-3">
                ₹
                {item.card.info.price
                  ? (item.card.info.price / 100).toFixed(2)
                  : (item.card.info.defaultPrice / 100).toFixed(2)}
              </p>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2 font-medium">
                {item.card.info.description}
              </p>
              <button
                className="bg-indigo-600 text-white font-bold py-2 px-6 rounded-full flex items-center transition-all duration-300 hover:bg-indigo-700 transform hover:scale-105"
                onClick={() => handleAddItem(item)}
              >
                <FiShoppingCart className="mr-2" />
                Add to Cart
              </button>
            </div>
            <div className="w-1/3 relative">
              <img
                src={IMG_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-full h-full object-cover"
              />
              {item.card.info.isVeg ? (
                <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Veg
                </span>
              ) : (
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Non-Veg
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
