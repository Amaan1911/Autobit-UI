import React from "react";
import { Menu, Filter } from "lucide-react";

const Header = React.memo(() => (
  <div className="flex justify-between items-center px-4 sm:px-6 py-6 transition-all duration-300">
    <Menu size={24} sm:size={28} strokeWidth={2.5} className="transition-transform duration-200 hover:scale-110" />
    <Filter size={20} sm:size={24} strokeWidth={2.5} className="transition-transform duration-200 hover:scale-110" />
  </div>
));

Header.displayName = "Header";

export default Header;