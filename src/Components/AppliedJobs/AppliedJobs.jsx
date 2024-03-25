import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getJobAplication } from "../../Utils/LocalStorage";
import CardAppliedJobs from "./CardAppliedJobs";

const AppliedJobs = () => {
  const job = useLoaderData();

  const [appliedJobs, setappliedJobs] = useState([]);
  const [displayJobs,setDisplayjobs] = useState([]);

  const handelJobsFilter = filter => {
    if (filter === 'all') {
      setDisplayjobs(appliedJobs);
    }else if(filter === 'Remote'){
      const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote")
      setDisplayjobs(remoteJobs)
    }else if(filter === 'Onsite'){
      const onsideJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite")
      setDisplayjobs(onsideJobs)
    }
  }

  useEffect(() => {
    const stroedJobsId = getJobAplication();
    if (job.length > 0) {
      const jobApplied = job.filter((job) => stroedJobsId.includes(job.id));
      setappliedJobs(jobApplied);
      setDisplayjobs(jobApplied)
    }
  }, []);



  console.log(appliedJobs);
  return (
    <div>
      <div className="flex justify-end my-12">
        <details className="dropdown ">
          <summary className="m-1 btn ">Filter By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={() => handelJobsFilter('all')}>
              <a>All</a>
            </li>
            <li onClick={() => handelJobsFilter("Remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handelJobsFilter("Onsite")}>
              <a>Onside</a>
            </li>
          </ul>
        </details>
      </div>
      {displayJobs.map((job) => (
        <CardAppliedJobs key={job.id} job={job} />
      ))}
    </div>
  );
};

export default AppliedJobs;
