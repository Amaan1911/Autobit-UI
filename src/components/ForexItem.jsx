import React from "react";
import ReactCountryFlag from "react-country-flag";

const ForexItem = React.memo(({ item, index }) => (
  <div className="flex items-center px-4 sm:px-6 py-4 border-b border-gray-900 transition-all duration-300 hover:bg-gray-900/20">
    <div className="flex items-center gap-3 flex-1">
      <div className="relative w-10 h-10 sm:w-12 sm:h-12">
        <ReactCountryFlag
          countryCode="US"
          svg
          className="absolute w-7 h-7 sm:w-9 sm:h-9 rounded-full left-0 top-0 border-2 border-black transition-transform duration-200 hover:scale-105"
        />
        <ReactCountryFlag
          countryCode="DE"
          svg
          className="absolute w-12 h-12 sm:w-15 sm:h-15 rounded-full left-1.5 sm:left-2 top-0 border-2 border-black z-10 transition-transform duration-200 hover:scale-105"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-gray-500 text-xs">{item.time}</span>
        <span className="text-white text-sm sm:text-base font-medium transition-colors duration-200 hover:text-gray-300">
          {item.pair}
        </span>
        <div className="flex gap-2">
          <span className="text-green-600 text-xs font-medium">
            {item.change}
          </span>
          <span className="text-gray-400 text-xs font-medium">
            ({item.percentage})
          </span>
        </div>
      </div>
    </div>
    <div className="flex gap-4 sm:gap-6">
      <div className="flex flex-col items-end">
        <span className="text-sm sm:text-base font-medium text-white">
          {item.price1.slice(0, 3)}
          <span
            className={`text-base sm:text-lg font-semibold ${
              item.price1Color === "red"
                ? "text-red-500"
                : item.price1Color === "green"
                ? "text-green-500"
                : "text-white"
            }`}
          >
            {item.price1.slice(3)}
          </span>
        </span>
        <span className="text-gray-500 text-xs">{item.low}</span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-sm sm:text-base font-medium text-white">
          {item.price2.slice(0, 3)}
          <span
            className={`text-base sm:text-lg font-semibold ${
              item.price2Color === "red"
                ? "text-red-500"
                : item.price2Color === "green"
                ? "text-green-500"
                : "text-white"
            }`}
          >
            {item.price2.slice(3)}
          </span>
        </span>
        <span className="text-gray-500 text-xs">{item.high}</span>
      </div>
    </div>
  </div>
));

ForexItem.displayName = "ForexItem";

export default ForexItem;