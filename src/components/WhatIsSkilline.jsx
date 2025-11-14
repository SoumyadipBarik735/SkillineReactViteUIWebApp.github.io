import React from "react";
import img1 from "../assets/Image1.png";
import img2 from "../assets/Image2.png";

const WhatIsSkilline = () => {
  return (
    <section className="font-poppins mt-20 mb-20">
      {/*Header */}
      <div className="flex items-center justify-center mb-2">
        <p className="text-xl font-bold">
          <span className="text-[#2F327D]">What is </span>
          <span className="text-[#F48C06]">Skilline?</span>
        </p>
      </div>
      {/*Next paragraph */}
      <div className="flex items-center justify-center mb-4">
        <p className="text-sm text-[#696984] text-center ">
          Skilline is a platform that allows educators to create online classes
          whereby they can <br />
          store the course materials online; manage assignments, quizzes and
          exams; monitor
          <br /> due dates; grade results and provide students with feedback all
          in one place.
        </p>
      </div>
      {/*pic div */}
      <div className="flex gap-10 items-center justify-center mt-10">
        {/*left image */}
        <span className="relative inline-block">
          <img src={img1} className="h-44 w-76 object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <p className="text-sm font-bold mb-3 text-white">FOR INSTRUCTORS</p>
            <p className="text-xs text-white  border rounded-full flex items-center justify-center py-2 w-40">
              Start a class today
            </p>
          </div>
        </span>
        {/*Right image */}
        <span className="relative inline-block">
          <img src={img2} className="h-44 w-76" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <p className="text-sm font-bold mb-3 text-white">FOR STUDENTS</p>
            <p className="text-xs font-semibold text-white rounded-full w-44 py-2 flex items-center justify-center bg-[#23BDEEE5]">
              Enter acces code
            </p>
          </div>
        </span>
      </div>
    </section>
  );
};

export default WhatIsSkilline;
