import React from "react";
import ForexItem from "./ForexItem";

const ForexList = React.memo(({ items }) => (
  <div className="pb-20 transition-all duration-300">
    {items.map((item, index) => (
      <ForexItem key={index} item={item} index={index} />
    ))}
  </div>
));

ForexList.displayName = "ForexList";

export default ForexList;