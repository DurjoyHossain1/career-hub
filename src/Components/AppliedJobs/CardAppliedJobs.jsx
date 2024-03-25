import React from "react";

const CardAppliedJobs = ({ job }) => {
  const {
    logo,
    job_title,
    id,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="border  p-10 mb-10">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <div className="h-[240px] w-[240px] flex justify-center items-center bg-zinc-300 ">
            <img src={logo} alt="" className="w-full" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">{job_title}</h3>
            <h3 className="text-[#757575] text-2xl mt-2">{company_name}</h3>

            <div className="felx gap-6 mt-4">
              <button className="btn bg-transparent hover:bg-transparent">
                {job_type}
              </button>
              <button className="btn bg-transparent hover:bg-transparent">
                {remote_or_onsite}
              </button>
            </div>
            <div className="flex gap-4 mt-6">
              <h2 className="text-xl">
                {" "}
                <span></span> {location}{" "}
              </h2>
              <h2 className="text-xl">
                {" "}
                <span></span> Selery: {salary}{" "}
              </h2>
            </div>
          </div>
        </div>
        <button className="btn btn-success text-white">View Details</button>
      </div>
    </div>
  );
};

export default CardAppliedJobs;
