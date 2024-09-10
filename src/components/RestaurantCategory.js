import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isOpen, onToggle }) => {
  return (
    <div className="w-full max-w-3xl mx-auto my-6">
      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Accordion Header */}
        <motion.button
          className="w-full px-5 py-3 flex flex-col items-start cursor-pointer focus:outline-none group"
          onClick={onToggle}
          whileHover={{ backgroundColor: "rgba(249, 250, 251, 0.9)" }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col items-start">
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
                {data.title}
              </h2>
              {data.cuisines && data.cuisines.length > 0 && (
                <p className="text-sm text-gray-500 mt-1">
                  {data.cuisines.join(", ")}
                </p>
              )}
            </div>
            <motion.div
              className="bg-indigo-100 rounded-full p-2 group-hover:bg-indigo-200 transition-colors duration-300"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-indigo-600" />
            </motion.div>
          </div>
          <div className="flex items-center mt-2">
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-2 py-1 rounded-full">
              {data.itemCards.length} items
            </span>
            {data.avgRating && (
              <span className="ml-3 text-xs font-semibold text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full flex items-center">
                <svg className="w-4 h-4 mr-1 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
                {data.avgRating}
              </span>
            )}
          </div>
        </motion.button>

        {/* Accordion Body */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="px-5 py-3 bg-gray-50">
                <ItemList items={data.itemCards} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default RestaurantCategory;
