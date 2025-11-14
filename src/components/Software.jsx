import React from "react";
import { FileText, Calendar, UsersRound } from "lucide-react";

const Software = () => {
  return (
    <section className="mt-15 font-poppins">
      {/*Header */}
      <div className="flex items-center justify-center mb-10">
        <div>
          <p className="flex items-center justify-center gap-2">
            <span className="text-[#2F327D] text-xl font-bold">All-In-One</span>
            <span className="text-[#F48C06] text-xl font-bold ">
              Cloud Software
            </span>
          </p>
          <p className="text-sm text-[#696984] text-center">
            Skilline is one powerful online software suite that combines all the{" "}
            <br /> tools needed to run a successful school or office.
          </p>
        </div>
      </div>
      {/*Buttom part */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10 mb-10">
        {/* Card 1 */}
        <div className="flex relative flex-col items-center bg-[#FFFFFF] rounded-lg shadow-[0_0_20px_rgba(0.2,0.2,0.2,0.2)] p-6 w-80 h-72 text-center pt-20">
          <div className=" bg-[#5B72EE] text-white p-3 rounded-full mb-4 absolute top-[-8%]">
            <FileText className="translate-y-500" />
          </div>
          <h3 className="text-md font-bold mb-2 text-[#2F327D]">
            Online Billing, <br />
            Invoicing, & Contracts
          </h3>
          <p className="text-[#696984] text-sm text-center">
            Simple and secure control of your organization's financial and legal
            transactions. Send customized invoices and contracts.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex relative flex-col items-center bg-white rounded-lg shadow-[0_0_20px_rgba(0.2,0.2,0.2,0.2)]  p-6 w-80 h-72 text-center pt-20">
          <div className="bg-[#F48C06] text-white p-3 rounded-full mb-4 absolute top-[-8%] ">
            <Calendar />
          </div>
          <h3 className="text-md font-bold mb-2 text-[#2F327D]">
            Easy Scheduling & <br />
            Attendance Tracking
          </h3>
          <p className="text-[#696984] text-sm text-center">
            Schedule and reserve classrooms at one campus or multiple campuses.
            Keep detailed records of student attendance.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center bg-white rounded-lg shadow-[0_0_20px_rgba(0.2,0.2,0.2,0.2)]  p-6 w-80 h-72 text-center relative pt-20">
          <div className="bg-[#29B9E7] text-white p-3 rounded-full mb-4 absolute top-[-8%]">
            <UsersRound />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-[#2F327D]">
            Customer Tracking
          </h3>
          <p className="text-[#696984] text-sm ">
            Automate and track emails to individuals or groups. Skilline's
            built-in system helps organize your organization.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Software;
