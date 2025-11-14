import React from "react";
import star from "../assets/Star.png";
import Book from "../assets/Book.png";
import ub1image from "../assets/UBImage1.png";
import ug1image from "../assets/UGImage2.png";
import ub2image from "../assets/UBImage2.png";
import ug2image from "../assets/UGImage3.png";

const Management = () => {
  return (
    <section className="font-poppins mb-10 ">
      <div className="flex items-center justify-center gap-32">
        {/*Left */}
        <div className="flex flex-col gap-5">
          <p className="text-[#F48C06] text-2xl font-bold">
            Class Management
            <br />
            <span className="text-[#2F327D] "> Tools for Educators</span>
          </p>
          <p className="text-sm text-[#696984]">
            Class provides tools to help run and manage the class
            <br /> such as Class Roster, Attendance, and more. With the
            <br /> Gradebook, teachers can review and grade tests and
            <br /> quizzes in real-time.
          </p>
        </div>
        {/*Right */}
        <div>
          <div className="flex items-end justify-end mb-3 gap-6 -mr-5  ">
            <div className="h-6 w-6 rounded-full bg-[#9FD7FF]"></div>
            <div className="h-3 w-3 rounded-full bg-[#9FD7FF] -mb-3"></div>
          </div>
          <div className="relative h-[300px] w-[360px] rounded-xl bg-white shadow-md">
            <div className="absolute bg-white rounded-full flex items-center justify-center border-[8px] -top-5 -left-6">
              <img src={star} className="h-12 w-12" />
            </div>
            <p className="py-2 bg-[#54AFF0] rounded-t-xl text-white flex items-center justify-center">
              GradeBook
            </p>
            <div className="absolute bg-white rounded-full flex items-center justify-center border-[8px] top-5 -right-6">
              <img src={Book} className="h-10 w-10" />
            </div>
            {/*under header */}
            <div className="mt-5 mb-5">
              <div className="flex flex-col">
                {/*1st right */}
                <div className="flex relative items-center justify-end mt-8 ">
                  <div className="h-4 w-32 bg-[#3189EF] "></div>
                  <img
                    src={ub2image}
                    className="h-14 w-14 rounded-full absolute right-28"
                  />
                  <p className="bg-[#CDE4FF] py-1 px-5 rounded-full text-xs text-[#486F9C] absolute mr-32 mt-8 flex items-center justify-center">
                    9
                  </p>
                </div>
                {/*1st left */}
                <div className="flex items-center justify-start mt-2 ">
                  <div className="h-4 w-16 bg-[#3AC6F2] "></div>
                  <img
                    src={ub1image}
                    className="h-10 w-10 rounded-full absolute ml-10  "
                  />
                  <p className="bg-[#CDF3FF] py-1 px-3 rounded-full text-xs text-[#43869B] absolute ml-16 mt-8 flex items-center justify-center">
                    100
                  </p>
                </div>
              </div>

              <div className="flex flex-col">
                {/*2nd right */}
                <div className="flex items-center justify-end mt-16 ">
                  <div className="h-4 w-20 bg-[#F13C3C] "></div>
                  <img
                    src={ug2image}
                    className="h-14 aspect-square rounded-full absolute mr-12"
                  />
                  <p className="bg-[#FFCDCD] py-1 px-5 rounded-full text-xs text-[#9E5555] absolute mr-16 mt-8 flex items-center justify-center">
                    75
                  </p>
                </div>
                {/*2nd left */}
                <div className="flex items-center  mt-2">
                  <div className="h-4 w-32 bg-[#68F146] "></div>
                  <img
                    src={ug1image}
                    className="h-10 w-10 rounded-full absolute ml-28  "
                  />
                  <p className="bg-[#D7FFCD] py-1 px-3 rounded-full text-xs text-[#4E8C3F] absolute ml-36 mt-8 flex items-center justify-center">
                    85
                  </p>
                </div>
              </div>
            </div>
            {/*Export */}
            <div className="flex justify-end mr-5 ">
              <div className="bg-[#545AE7] w-20 flex items-center justify-center rounded-full shadow-[#393FCF]">
                <button className="text-xs text-white px-3 py-2 ">
                  Export
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;
