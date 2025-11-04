import React from "react";
import {
  Menu,
  Battery,
  Filter,
  Home,
  TrendingUp,
  Clock,
  User,
} from "lucide-react";
import ReactCountryFlag from "react-country-flag";

const App = (props) => {
  const defaultItems = [
    {
      time: "15:00:00",
      pair: "EUR/GBP",
      change: "+30",
      percentage: "+23.2%",
      price1: "1478.256369",
      price2: "1478.256369",
      low: "L:235698",
      high: "H:25.3659",
      price1Color: "red",
      price2Color: "green",
    },
    {
      time: "15:00:00",
      pair: "EUR/GBP",
      change: "+30",
      percentage: "+23.2%",
      price1: "1478.256369",
      price2: "1478.256369",
      low: "L:235698",
      high: "H:25.3659",
      price1Color: "white",
      price2Color: "green",
    },
    {
      time: "15:00:00",
      pair: "EUR/GBP",
      change: "+30",
      percentage: "+23.2%",
      price1: "1478.256369",
      price2: "1478.256369",
      low: "L:235698",
      high: "H:25.3659",
      price1Color: "white",
      price2Color: "red",
    },
    {
      time: "15:00:00",
      pair: "EUR/GBP",
      change: "+30",
      percentage: "+23.2%",
      price1: "1478.256369",
      price2: "1478.256369",
      low: "L:235698",
      high: "H:25.3659",
      price1Color: "red",
      price2Color: "green",
    },
    {
      time: "15:00:00",
      pair: "EUR/GBP",
      change: "+30",
      percentage: "+23.2%",
      price1: "1478.256369",
      price2: "1478.256369",
      low: "L:235698",
      high: "H:25.3659",
      price1Color: "red",
      price2Color: "green",
    },
    {
      time: "15:00:00",
      pair: "EUR/GBP",
      change: "+30",
      percentage: "+23.2%",
      price1: "1478.256369",
      price2: "1478.256369",
      low: "L:235698",
      high: "H:25.3659",
      price1Color: "white",
      price2Color: "green",
    },
    {
      time: "15:00:00",
      pair: "EUR/GBP",
      change: "+30",
      percentage: "+23.2%",
      price1: "1478.256369",
      price2: "1478.256369",
      low: "L:235698",
      high: "H:25.3659",
      price1Color: "green",
      price2Color: "red",
    },
    {
      time: "15:00:00",
      pair: "EUR/GBP",
      change: "+30",
      percentage: "+23.2%",
      price1: "1478.256369",
      price2: "1478.256369",
      low: "L:235698",
      high: "H:25.3659",
      price1Color: "green",
      price2Color: "red",
    },
    {
      time: "15:00:00",
      pair: "EUR/GBP",
      change: "+30",
      percentage: "+23.2%",
      price1: "1478.256369",
      price2: "1478.256369",
      low: "L:235698",
      high: "H:25.3659",
      price1Color: "red",
      price2Color: "green",
    },
  ];

  const { items = defaultItems } = props;

  return (
    <div className="bg-black min-h-screen text-white font-['Google Sans'] text-base font-normal">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 sm:px-6 pt-2 pb-1">
        <span className="text-white text-sm sm:text-base font-semibold">9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            <div className="w-1 h-3 bg-white rounded-sm"></div>
            <div className="w-1 h-3 bg-white rounded-sm"></div>
            <div className="w-1 h-3 bg-white rounded-sm"></div>
            <div className="w-1 h-3 bg-white/60 rounded-sm"></div>
          </div>
          {/* WiFi Icon (iPhone Style) */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1"
          >
            <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0" />
            <line x1="12" y1="20" x2="12" y2="20" />
          </svg>
          {/* Battery Icon with 80% text inside */}
          <div className="relative w-6 h-4 flex items-center justify-center">
            <Battery
              size={24}
              strokeWidth={2}
              className="text-white absolute"
            />
            <span className="text-[8px] font-semibold text-white z-10">
              80%
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center px-4 sm:px-6 py-6">
        <Menu size={24} sm:size={28} strokeWidth={2.5} />
        <Filter size={20} sm:size={24} strokeWidth={2.5} />
      </div>

      {/* Tabs */}
      <div className="flex gap-15 sm:gap-15 px-4 sm:px-6 pb-4 overflow-x-auto">
        <button className="text-gray-500 text-sm sm:text-base whitespace-nowrap">
          Favourites
        </button>
        <button className="text-white text-sm sm:text-base font-semibold whitespace-nowrap border-b-2 border-white pb-1">
          Forex
        </button>
        <button className="text-gray-500 text-sm sm:text-base whitespace-nowrap">
          Crypto
        </button>
        <button className="text-gray-500 text-sm sm:text-base whitespace-nowrap">
          Indices
        </button>
        <button className="text-gray-500 text-sm sm:text-base whitespace-nowrap">
          Der...
        </button>
      </div>

      {/* Forex List */}
      <div className="pb-20">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center px-4 sm:px-6 py-4 border-b border-gray-900"
          >
            <div className="flex items-center gap-3 flex-1">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
  <ReactCountryFlag
    countryCode="US"
    svg
    className="absolute w-7 h-7 sm:w-9 sm:h-9 rounded-full left-0 top-0 border-2 border-black"
  />

  <ReactCountryFlag
    countryCode="DE"
    svg
    className="absolute w-12 h-12 sm:w-15 sm:h-15 rounded-full left-1.5 sm:left-2 top-0 border-2 border-black z-10"
  />
</div>


              <div className="flex flex-col">
                <span className="text-gray-500 text-xs">{item.time}</span>
                <span className="text-white text-sm sm:text-base font-medium">
                  {item.pair}
                </span>
                <div className="flex gap-2">
                  
                <span className="text-green-600 text-xs font-medium">
                  {item.change}
                </span>
                <span className="text-gray-400 text-xs font-medium">
                  ({item.percentage})</span>
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
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-900 px-4 sm:px-6 py-3 z-10">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <button className="flex flex-col items-center gap-1">
            <Home size={20} sm:size={24} className="text-green-500" />
            <span className="text-green-500 text-xs font-medium">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <TrendingUp size={20} sm:size={24} className="text-gray-600" />
            <span className="text-gray-600 text-xs">Trade</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <Clock size={20} sm:size={24} className="text-gray-600" />
            <span className="text-gray-600 text-xs">History</span>
          </button>
          <button className="flex flex-col items-center gap-1">
            <User size={20} sm:size={24} className="text-gray-600" />
            <span className="text-gray-600 text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
