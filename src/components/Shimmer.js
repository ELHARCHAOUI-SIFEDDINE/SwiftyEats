import React from "react";

const Shimmer = () => {
  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      {/* Search Bar */}
      <div className="w-3/5 h-12 mx-auto mt-20 mb-5 flex justify-between items-center bg-white rounded-full shadow-md p-1.5">
        <div className="w-4/5 h-10 bg-gray-300 rounded-full animate-shimmer"></div>
        <div className="w-1/5 h-10 bg-gray-300 rounded-full animate-shimmer"></div>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center mt-5">
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className="w-24 h-10 bg-gray-300 mx-2 rounded-full animate-shimmer"
          ></div>
        ))}
      </div>

      {/* Restaurant List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:translate-y-[-5px] animate-pulse"
          >
            <div className="h-52 bg-gray-300 animate-shimmer"></div>
            <div className="p-4">
              <div className="h-6 w-3/4 bg-gray-300 mb-3 animate-shimmer"></div>
              <div className="h-4 w-5/6 bg-gray-300 mb-3 animate-shimmer"></div>
              <div className="flex items-center mb-3">
                <div className="w-5 h-5 bg-gray-300 rounded-full mr-2 animate-shimmer"></div>
                <div className="w-10 h-5 bg-gray-300 rounded animate-shimmer"></div>
              </div>
              <div className="flex justify-between">
                <div className="w-1/2 h-4 bg-gray-300 rounded animate-shimmer"></div>
                <div className="w-1/2 h-4 bg-gray-300 rounded animate-shimmer"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
