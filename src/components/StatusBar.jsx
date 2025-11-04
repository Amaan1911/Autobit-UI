import React from "react";
import { Battery } from "lucide-react";

const StatusBar = React.memo(() => (
  <div className="flex justify-between items-center px-4 sm:px-6 pt-2 pb-1 transition-all duration-300">
    <span className="text-white text-sm sm:text-base font-semibold">9:41</span>
    <div className="flex items-center gap-1">
      <div className="flex gap-0.5">
        <div className="w-1 h-3 bg-white rounded-sm"></div>
        <div className="w-1 h-3 bg-white rounded-sm"></div>
        <div className="w-1 h-3 bg-white rounded-sm"></div>
        <div className="w-1 h-3 bg-white/60 rounded-sm"></div>
      </div>
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
      <div className="relative w-6 h-4 flex items-center justify-center">
        <Battery
          size={24}
          strokeWidth={2}
          className="text-white absolute"
        />
        <span className="text-[8px] font-semibold text-white z-10">80%</span>
      </div>
    </div>
  </div>
));

StatusBar.displayName = "StatusBar";

export default StatusBar;