import React from "react";
import img3 from "../assets/Image3.jpg";

const Everything = () => {
  return (
    <section className="font-poppins mb-20">
      <div className="flex items-center justify-center gap-10">
        {/*Left part */}
        <div>
          <div className="relative inline-flex items-center justify-center">
            <div className="absolute -top-3 -left-4 inset-0 h-10 w-10 rounded-full bg-[#F4B767]"></div>
            <p className="relative text-md font-semibold leading-[1.5rem]">
              <span className="ml-0 text-[#2F327D]">
                Everything you can do in a physical
                <br /> classroom,{" "}
              </span>{" "}
              <span className="text-[#F4B767]"> you can do with Skilline</span>
            </p>
          </div>
          <div className="mt-5">
            <div className="flex gap-3 items-center justify-center">
              <p className="text-xs text-[#696984]">
                Skilline's school management software helps traditional
                <br /> and online schools manage scheduling, attendance,
                <br /> payments and virtual classrooms all in one secure
                <br /> cloud-based system.
              </p>
              <div className="h-4 w-4 rounded-full bg-[#F4B767]"></div>
            </div>
            <div className="mt-2">
              <button className="underline text-xs text-[#696984]">
                Learn more
              </button>
            </div>
          </div>
        </div>
        {/*Right part */}
        <div className="relative">
          <div className="absolute -top-2 -left-2 -z-10 h-16 w-16 bg-[#23BDEE] rounded-md"></div>
          <img src={img3} className="h-56 w-96 rounded-md" />
          <div className="absolute -bottom-3 -right-3 -z-10 h-28 w-28 rounded-md bg-[#F3AC50]"></div>
        </div>
      </div>
    </section>
  );
};

export default Everything;
