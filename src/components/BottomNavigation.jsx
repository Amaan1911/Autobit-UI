import React from "react";
import { Home, TrendingUp, Clock, User } from "lucide-react";

const BottomNavigation = React.memo(() => (
  <div className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-900 px-4 sm:px-6 py-3 transition-all duration-300">
    <div className="flex justify-between items-center max-w-md mx-auto">
      <button className="flex flex-col items-center gap-1 transition-all duration-200 hover:scale-105">
        <Home size={20} sm:size={24} className="text-green-500" />
        <span className="text-green-500 text-xs font-medium">Home</span>
      </button>
      <button className="flex flex-col items-center gap-1 transition-all duration-200 hover:scale-105">
        <TrendingUp size={20} sm:size={24} className="text-gray-600" />
        <span className="text-gray-600 text-xs">Trade</span>
      </button>
      <button className="flex flex-col items-center gap-1 transition-all duration-200 hover:scale-105">
        <Clock size={20} sm:size={24} className="text-gray-600" />
        <span className="text-gray-600 text-xs">History</span>
      </button>
      <button className="flex flex-col items-center gap-1 transition-all duration-200 hover:scale-105">
        <User size={20} sm:size={24} className="text-gray-600" />
        <span className="text-gray-600 text-xs">Profile</span>
      </button>
    </div>
  </div>
));

BottomNavigation.displayName = "BottomNavigation";

export default BottomNavigation;