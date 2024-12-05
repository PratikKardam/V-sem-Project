import React from "react";
import Booking from "../Booking/Booking";

const Home = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:-cols-3">
        <div className=""><Booking/></div>
        <div className="col-span-2 order-1 md:order-last">Map</div>
      </div>
    </>
  );
};

export default Home;
