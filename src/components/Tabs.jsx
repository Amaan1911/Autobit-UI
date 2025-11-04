import React from "react";

const Tabs = React.memo(() => (
  <div className="flex gap-18 px-4 sm:px-6 pb-4 overflow-x-auto transition-all duration-300 ">
    <button className="text-gray-500 text-sm sm:text-base whitespace-nowrap transition-colors duration-200 hover:text-gray-300">
      Favourites
    </button>
    <button className="text-white text-sm sm:text-base font-semibold whitespace-nowrap border-b-2 border-white pb-1 transition-all duration-200 hover:border-gray-300">
      Forex
    </button>
    <button className="text-gray-500 text-sm sm:text-base whitespace-nowrap transition-colors duration-200 hover:text-gray-300">
      Crypto
    </button>
    <button className="text-gray-500 text-sm sm:text-base whitespace-nowrap transition-colors duration-200 hover:text-gray-300">
      Indices
    </button>
    <button className="text-gray-500 text-sm sm:text-base whitespace-nowrap transition-colors duration-200 hover:text-gray-300">
      Der...
    </button>
  </div>
));

Tabs.displayName = "Tabs";

export default Tabs;