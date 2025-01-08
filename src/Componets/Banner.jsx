import React from "react";
import "../style/HomePage.css";
import banner from "../image/Banner.jpg";
import decor from "../image/decor.png";

const Banner = () => {
  return (
    <>
      <div className="MyNavBar">
        <img src={banner} alt="" className="bannerimg" />
        <div className="bannerTextDiv">
          <div>
            <p className="text1">New Arrival</p>
            <p className="text2">New Style</p>
          </div>
        </div>
        <div className="ImageDiv">
          <img src={decor} alt="" className="BannerImage imageEntry" />
        </div>
      </div>
    </>
  );
};

export default Banner;
