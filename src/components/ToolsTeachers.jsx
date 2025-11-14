import React from "react";
import toolspic from "../assets/ToolsPic.png";

const ToolsTeachers = () => {
  return (
    <section className="font-poppins">
      <div className="flex gap-44 items-center justify-center">
        {/*Left portion */}
        <div>
          <p className="text-2xl text-[#F48C06] font-semibold mb-5">
            Tools{" "}
            <span className="text-2xl text-[#2F327D] font-bold">
              For Teachers
              <br /> And Learners
            </span>
          </p>
          <p className="text-[#696984] text-sm">
            Class has a dynamic set of teaching tools built to
            <br /> be deployed and used during class. Teachers can
            <br /> handout assignments in real-time for students to
            <br /> complete and submit.
          </p>
        </div>
        {/*Right portion */}
        <div>
          <img src={toolspic} alt="" className="h-[300px] w-[380px]" />
        </div>
      </div>
    </section>
  );
};

export default ToolsTeachers;
