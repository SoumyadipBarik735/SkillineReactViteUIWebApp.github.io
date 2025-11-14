import React from "react";
import girlImage from "../assets/GirlImage.png";
import user from "../assets/UserIcon.jpg";
import { Play, Calendar, Mail, Check, ChartNoAxesColumn } from "lucide-react";

const Hero = () => {
  return (
    <section className="font-poppins flex items-end justify-between px-20 pt-4 bg-[#FFF2E1] min-h-screen rounded-br-[36%] overflow-hidden rounded-bl-[36%]">
      {/*Left Portion */}
      <div className="md:w-1/2  space-y-6 self-center">
        <p className="text-4xl font-bold text-[#F48C06]">
          Studying <span className="text-[#2F327D]">Online</span>
          <span className="text-[#2F327D]"> is now</span>
          <br />
          <span className="text-[#2F327D]"> much easier</span>
        </p>
        <p className="text-[#464646] text-sm">
          Skilline is an interesting platform that will teach
          <br /> you in a more interactive way.
        </p>
        <div className="flex items-center gap-4">
          <button className="bg-[#F48C06] text-white px-4 py-2 rounded-full hover:bg-[#db8719]">
            Join for free
          </button>
          <button className="flex items-center gap-4 text-[#252641]">
            <span className="flex items-center justify-center px-3 py-3 rounded-full  bg-white text-[#23BDEE] text-xl leading-none">
              <Play className="" fill="#23BDEE" size={16} />
            </span>
            Watch how it works
          </button>
        </div>
      </div>

      {/*Right Portion */}
      <div className="md:w-1/2 relative h-[90vh]  md:mt-0 ">
        <img
          src={girlImage}
          alt="Student"
          className="w-full h-full rounded-lg object-cover drop-shadow-[0_8px_12px_rgba(0,0,0,0.3)]"
        />

        {/*1st div */}
        <div className="absolute top-40 left-20 bg-white/60 backdrop-blur-[1px]  rounded-xl p-3 text-xs flex gap-2 items-center text-[#545567] ">
          <Calendar className="text-[#FFFFFF] bg-[#23BDEE] p-1 rounded-md " />{" "}
          <div>
            <span className="text-sm font-semibold">250k+ </span>
            <br />
            <span>Assisted Students</span>
          </div>
        </div>
        {/*2nd div */}
        <div className="absolute bottom-40 left-16 bg-white/60 backdrop-blur-[1px] rounded-xl p-3 text-sm font-medium">
          <div className="flex gap-2">
            <div className="relative">
              <img src={user} className="h-8 w-8 rounded-full" />
              <div className="absolute bottom-1 right-0 bg-[#2EBB5E] h-2.5 w-2.5 border-2 border-white rounded-full "></div>
            </div>
            <div>
              <p className="text-sm">User Experience Class</p>
              <p className="text-xs">Today at 12.00 PM</p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-2">
            <button className="cursor-pointer flex items-center justify-center bg-[#D8587E] rounded-full px-4 py-2 text-xs font-semibold text-white">
              Join Now
            </button>
          </div>
        </div>
        {/*3rd div */}
        <div className="absolute right-20 top-32 ">
          <ChartNoAxesColumn className="text-[#F25471] h-10 w-10 bg-white rounded-md p-1 border-[7px] border-[#F3627C]" />
        </div>

        {/*4rd div */}
        <div className="absolute right-5 bg-white top-64 rounded-xl p-3 text-sm">
          <div className="flex gap-2 items-center">
            <Mail className="h-7 w-7 text-white bg-[#F88C3D] p-1 rounded-md" />
            <div>
              <p className="text-[#595959] text-sm">Congratulation</p>
              <p className="text-xs text-[#545567] ">
                Your admission completed
              </p>
            </div>
            <div className="self-start ">
              <Check className="h-3 w-3 text-white bg-[#4EE381] rounded-full p-0.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
