import React from "react";
import user from "../assets/User.png";
import dashboard from "../assets/Dashboard.png";
import copypaste from "../assets/CopyPaste.png";
import ug1img from "../assets/UGImage1.png";
import phone from "../assets/PhoneIcon.png";
import ug2img from "../assets/UGImage2.png";
import ug3img from "../assets/UGImage3.png";
import ub1img from "../assets/UBImage1.png";
import ub2img from "../assets/UBImage2.png";

const Features = () => {
  return (
    <section className="font-poppins mt-10 mb-20">
      {/*header */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg font-bold">
          <span className="text-[#2F327D]">Our </span>
          <span className="text-[#F48C06]">Features</span>
        </p>
        <p className="text-sm text-[#696984] ">
          This very extraordinary feature, can make learning activities more
          efficient
        </p>
      </div>
      {/*Bottom part */}
      <div className="mt-10 flex gap-10 items-center justify-center">
        {/*left picture */}
        <div className="realtive">
          <div className="h-16 w-16 bg-[#33EFA0] rounded-full"></div>
          <div className="h-3 w-3 bg-[#33D9EF] rounded-full"></div>
          <div className="relative h-[200px] w-[400px] bg-[#F4F4F499] rounded-md">
            <div className=" flex gap-2 items-center justify-start ml-3 py-2">
              <div className="h-2 w-2 rounded-full bg-[#EE6767]"></div>
              <div className="h-2 w-2 rounded-full bg-[#F6C566]"></div>
              <div className="h-2 w-2 rounded-full bg-[#5BEB7B]"></div>
            </div>
            <div className="relative">
              <img src={ug1img} className="h-32 ml-2" />
              <div className="flex gap-4">
                <p className="text-white bg-[#3465E1] px-3 text-xs flex items-center justify-center py-1 rounded-full">
                  Present
                </p>
                <div className="flex gap-2  bg-[#E13468] px-5 text-xs items-center justify-center py-1 rounded-full border-4 border-[#ea7f9f]">
                  <img src={phone} className="h-2 w-2 text-white " />
                  <p className="text-white">
                    Call
                  </p>
                </div>
                <img src={ug2img} className="absolute top-1 left-1/2 h-16 w-16" />
                <img src={ug3img} className="absolute h-32 w-32 -bottom -right-2" />
                <img src={ub1img} className="absolute top-1/2 left-1/2 h-16 w-16" />
                <img src={ub2img} className="absolute -right-7 top-1 h-28 w-28" />
                
              </div>
            </div>
          </div>
          <div className="h-16 w-16 bg-[#5B61EB] rounded-full "></div>
          <div className="h-3 w-3 bg-[#F56666] rounded-full"></div>
        </div>
        {/*Right portion */}
        <div>
          {/*User header */}
          <p className="font-bold text-xl">
            <span className="text-[#2F327D]">A</span>
            <span className="text-[#F48C06]"> user interface</span>
            <span className="text-[#2F327D]">
              {" "}
              designed
              <br /> for the classroom
            </span>
          </p>
          {/*User  Bottom */}
          <div className="ml-4 flex flex-col gap-6 mt-8">
            <div className="flex gap-4 items-center">
              <div className="flex items-center justify-center p-2 bg-[#FBFBFB] rounded-full shadow-[0_0_20px_rgba(0.2,0.2,0.2,0.2)] h-10 w-10">
                <img src={dashboard} className="h-4 w-4" />
              </div>
              <p className="text-sm text-[#696984]">
                Teachers don't get lost in the grid view <br />
                and have a dedicated Podium space.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center justify-center p-2 bg-[#FBFBFB] rounded-full shadow-[0_0_20px_rgba(0.2,0.2,0.2,0.2)] h-10 w-10">
                <img src={copypaste} className="h-4 w-4" />
              </div>
              <p className="text-sm text-[#696984]">
                TA's and presenters can be moved to <br />
                the front of the class.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="flex items-center justify-center p-2 bg-[#FBFBFB] rounded-full shadow-[0_0_20px_rgba(0.2,0.2,0.2,0.2)] h-10 w-10">
                <img src={user} className="h-4 w-4" />
              </div>
              <p className="text-sm text-[#696984]">
                Teachers can easily see all students <br /> and class data at
                one time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
