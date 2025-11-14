import React from "react";
import GoogleIcon from "../assets/icons/GoogleIcon";
import NetflixIcon from "../assets/icons/NetflixIcon";
import Airbnb from "../assets/icons/Airbnb";
import AmazonIcon from "../assets/icons/AmazonIcon";
import FacebookIcon from "../assets/icons/FacebookIcon";
import GarbIcon from "../assets/icons/GarbIcom";

const Companies = () => {
  return (
    <section className="mt-10 mb-10 font-poppins ">
      <div className="text-[#696984] text-xl flex items-center justify-center mb-10">
        <p>Trusted by 5,000 Companies Worldwide</p>
      </div>
      <div className="flex items-center justify-center gap-10">
        <GoogleIcon />
        <NetflixIcon />
        <Airbnb />
        <AmazonIcon />
        <FacebookIcon />
        <GarbIcon />
      </div>
    </section>
  );
};

export default Companies;
