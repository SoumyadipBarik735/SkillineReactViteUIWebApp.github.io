import React from "react";
import img1 from "../assets/DiscussionImg1.png";
import img2 from "../assets/DiscussionImg2.png";
import Gimg1 from "../assets/DiscussionGImg1.png";
import Gimg2 from "../assets/DiscussionGImg2.png";
import { Button } from "@mui/material";

const Discussions = () => {
  return (
    <section className="font-poppins mt-20 mb-40 flex flex-col items-center justify-center gap-10">
      <div className="flex justify-center items-center gap-32">
        {/* Left side */}
        <div className="">
          <div className="relative h-[320px] flex items-center justify-center">
            <div className="relative">
              <div className="absolute h-10 w-10 rounded-full bg-white border-[6px] border-[#23BDEE] -top-3 -right-3"></div>
              <div className="absolute h-20 w-20 rounded-lg bg-[#73BCFF] -bottom-2 -left-2"></div>
              <img src={img1} className="h-36 relative" />
            </div>

            {/* Discussion Box */}
            <div className="absolute bottom-0 left-10">
              <div className="relative">
                <div className="h-[180px] w-[240px] bg-white rounded-md shadow-md">
                  <div className="flex gap-2 items-center justify-start py-2 bg-[#EAEAEA] rounded-t-md">
                    <div className="h-2 w-2 rounded-full bg-[#EE6767] ml-3"></div>
                    <div className="h-2 w-2 rounded-full bg-[#F6C566]"></div>
                    <div className="h-2 w-2 rounded-full bg-[#5BEB7B]"></div>
                  </div>
                  <div className="flex items-center justify-center py-4">
                    <div className="border-r">
                      <img src={Gimg1} className="h-20 w-20 mr-4" />
                    </div>
                    <img src={Gimg2} className="h-20 w-20 ml-4" />
                  </div>
                  <div className="flex px-3 justify-between items-center">
                    <div>
                      <p className="text-[10px] font-bold text-[#696984]">
                        Private Discussion
                      </p>
                      <p className="text-[8px] text-[#A8A8B6]">
                        Your video can't be seen by others
                      </p>
                    </div>
                    <div className="bg-[#F55454] rounded-full shadow-[-0.1rem_0.1rem_1rem_0_#E5422B]">
                      <p className="text-[8px] text-white px-3 py-2">
                        End Discussion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <img src={img2} className="h-20 absolute top-2 -left-9" />
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="translate-y-11">
          <div className="flex flex-col gap-6">
            <p className="text-2xl text-[#2F327D] font-bold">
              One-on-One <br />
              <span className="text-[#F48C06]">Discussions</span>
            </p>
            <p className="text-[#696984] text-sm">
              Teachers and teacher assistants can talk with <br />
              students privately without leaving the Zoom <br />
              environment.
            </p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="border rounded-full w-48 flex items-center justify-center border-[#F48C06] mt-28">
        <button className="text-[#F48C06] text-sm py-3">
          See more features
        </button>
      </div>
    </section>
  );
};

export default Discussions;
