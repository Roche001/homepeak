import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./components/top/Top";
import Home from "./components/home/Home";
import Rent from "./components/rent/Rent";
import Buy from "./components/buy/Buy";
import Sell from "./components/sell/Sell";
import Footer from "./components/footer/Footer";
import House1 from "./components/house1/House1";
import House2 from "./components/house2/House2";
import House3 from "./components/house3/House3";
import House4 from "./components/house4/House4";
import House5 from "./components/house5/House5";
import House6 from "./components/house6/House6";
import House7 from "./components/house7/House7";
import House8 from "./components/house8/House8";
import House9 from "./components/house9/House9";
import House10 from "./components/house10/House10";
import House11 from "./components/house11/House11";
import House12 from "./components/house12/House12";
import House13 from "./components/house13/House13";
import House14 from "./components/house14/House14";
import House15 from "./components/house15/House15";
import House16 from "./components/house16/House16";

const App = () => {
  return (
    <Router>
      <Top />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route Rent path="Rent" exact element={<Rent />} />
        <Route Buy path="Buy" exact element={<Buy />} />
        <Route Sell path="Sell" exact element={<Sell />} />
        <Route House1 path="House1" exact element={<House1 />} />
        <Route House2 path="House2" exact element={<House2 />} />
        <Route House3 path="House3" exact element={<House3 />} />
        <Route House4 path="House4" exact element={<House4 />} />
        <Route House5 path="House5" exact element={<House5 />} />
        <Route House6 path="House6" exact element={<House6 />} />
        <Route House7 path="House7" exact element={<House7 />} />
        <Route House8 path="House8" exact element={<House8 />} />
        <Route House9 path="House9" exact element={<House9 />} />
        <Route House10 path="House10" exact element={<House10 />} />
        <Route House11 path="House11" exact element={<House11 />} />
        <Route House12 path="House12" exact element={<House12 />} />
        <Route House13 path="House13" exact element={<House13 />} />
        <Route House14 path="House14" exact element={<House14 />} />
        <Route House15 path="House15" exact element={<House15 />} />
        <Route House16 path="House16" exact element={<House16 />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
