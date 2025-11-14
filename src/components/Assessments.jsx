import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import italypic from "..//assets/ItalyPic.png";
import arrow from "../assets/Arrow.png";

const Assessments = () => {
  return (
    <section className="font-poppins mt-10 mb-10">
      <div className="flex items-center justify-center gap-52">
        {/*Left side */}
        <div>
          <div className="relative rounded-full bg-[#687EF3] h-12 w-12"></div>
          <div className="relative h-[300px] w-[240px] bg-white rounded-xl  shadow-[0_0_10px_2px_rgba(0,0,0,0.2)]">
            <div className="flex justify-between">
              <p className="text-xs flex items-center justify-center py-1 px-2 text-[#717FB0] bg-[#CDD8FF] rounded-full w-20 ml-4 mt-4">
                Question 1
              </p>
              <div>
                <div className="absolute bg-white p-2 shadow-md rounded-full -top-3 right-3">
                  <ClearIcon className="text-[#EE3175] border border-[#EE3175] rounded-full p-1 " />
                </div>
                <div className="absolute bg-white p-2 shadow-md rounded-full top-5 -right-3">
                  <CheckIcon className="text-[#2DD38E] border border-[#2DD38E] rounded-full p-1 " />
                </div>
              </div>
            </div>
            <div>
              <p className="text-[#55578D] text-md font-bold ml-4 mt-4">
                True or false? This play
                <br /> takes place in Italy
              </p>
            </div>
            <div className="relative">
              <img
                src={italypic}
                className="ml-4 mt-4  shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] rounded-lg"
              />
              <div className="absolute h-20 w-60 bg-white rounded-2xl shadow-lg flex items-center justify-center gap-5 -bottom-14 -right-32">
                <div className="bg-[#D8F9ED] rounded-full h-8 w-8 flex items-center justify-center">
                  <img src={arrow} className="h-16 w-16" alt="" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#41BE90]">
                    Your answer was
                    <br /> sent successfully
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Right side */}
        <div className="flex flex-col gap-5">
          <p className="text-2xl font-bold text-[#2F327D]">
            Assessments,
            <br />
            <span className="text-[#F48C06]"> Quizzes</span>, Tests
          </p>
          <p className="text-[#696984] text-sm ">
            Easily launch live assignments, quizzes, and
            <br /> tests. Student results are automatically entered in
            <br /> the online gradebook.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Assessments;
