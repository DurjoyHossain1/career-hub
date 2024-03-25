import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link } from "react-router-dom";

const FeaturedCards = ({ job }) => {
  const {
    logo,
    job_title,
    id,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  return (
    <div className=" p-10 border   bg-base-100 shadow-md">
      <figure>
        <img src={logo} alt="Company logo" />
      </figure>
      <div className="">
        <h2 className="card-title mt-8 text-2xl">{job_title}</h2>
        <h3 className="mt-2 text-xl text-[#757575]">{company_name}</h3>
        <div className="flex gap-4 mt-4">
          <button className="btn text-base text-[#7E90FE] border border-gray-300 bg-transparent hover:bg-transparent ">
            {remote_or_onsite}
          </button>
          <button className="btn text-base text-[#7E90FE] border border-gray-300 bg-transparent hover:bg-transparent ">
            {job_type}
          </button>
        </div>
        <div className="flex gap-10 mt-6 text-[#757575]">
          <div className="flex gap-3 text-xl items-center">
            <span>
              <IoLocationSharp />
            </span>
            {location}
          </div>
          <div className="flex gap-3 text-xl items-center">
            <span>
              <MdOutlineAttachMoney />
            </span>
            Selery : {salary}
          </div>
        </div>
        <div className="card-actions mt-6">
          <Link to={`/job/${id}`}>
            {" "}
            <button className="btn text-xl btn-primary rounded-lg bg-gradient-to-r from-blue-600 to-purple-400 text-white border-none">
              View Details
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCards;
