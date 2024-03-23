import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";



const FeaturedCards = ({ job }) => {
  const { logo , job_title,id,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences,contact_information } = job;
  return (
    <div className="   bg-base-100 shadow-xl">
      <figure>
        <img
          src={logo}
          alt="Company logo"
        />
      </figure>
      <div className="">
        <h2 className="card-title">{job_title}</h2>
        <h3>{company_name}</h3>
        <div className="">
            <button className="btn border border-gray-300 bg-transparent hover:bg-transparent ">{remote_or_onsite}</button>
            <button className="btn border border-gray-300 bg-transparent hover:bg-transparent ">{job_type}</button>
        </div>
        <div className="flex gap-10">
            <div className="flex gap-3 items-center"> 
                <span><IoLocationSharp/></span>
                {location}
            </div>
            <div className="flex gap-3 items-center">
                <span><MdOutlineAttachMoney/></span>
              Selery : {salary}
            </div>
        </div>
        <div className="card-actions ">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCards;
