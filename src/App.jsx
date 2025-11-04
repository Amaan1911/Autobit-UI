import React from "react";
import StatusBar from "./components/StatusBar";
import Header from "./components/Header";
import Tabs from "./components/Tabs";
import ForexList from "./components/ForexList";
import BottomNavigation from "./components/BottomNavigation";

const App = React.memo((props) => {
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
      <StatusBar />
      <Header />
      <Tabs />
      <ForexList items={items} />
      <BottomNavigation />
    </div>
  );
});

App.displayName = "App";

export default App;
