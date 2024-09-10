import React from "react";

const ShimmerMenu = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-28 pb-14 mt-22">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6 animate-pulse">
          <div className="p-6">
            <div className="flex items-center">
              <div className="h-20 w-20 rounded-full bg-gray-300 mr-4"></div>
              <div className="flex-1">
                <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <div className="flex items-center">
                <div className="h-4 bg-gray-300 rounded w-24 mr-4"></div>
              </div>
              <div className="flex items-center">
                <div className="h-4 bg-gray-300 rounded w-20 mr-4"></div>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="h-4 bg-gray-300 rounded w-16"></div>
              <div className="h-4 bg-gray-300 rounded w-12"></div>
              <div className="h-4 bg-gray-300 rounded w-20"></div>
            </div>
          </div>
        </div>

        {/* Accordion-like shimmer */}
        {[1, 2, 3].map((index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse mb-4"
          >
            {/* Accordion Header */}
            <div className="px-5 py-3 flex justify-between items-center">
              <div className="w-40 h-6 bg-gray-300 rounded"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
            {/* Accordion Content (collapsed effect) */}
            <div className="px-5 py-3">
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerMenu;
