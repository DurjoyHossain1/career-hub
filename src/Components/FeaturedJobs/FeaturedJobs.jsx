import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'
import FeaturedCards from './FeaturedCards'

const FeaturedJobs = () => {
    const [jobs, setjobs] = useState([])
    const [datalength, setdatalength] = useState(4)

    useEffect(() => {
     fetch('jobs.json')
     .then(res => res.json())
     .then(data => setjobs(data))
    },[])
  return (
    <div>
        <h1 className="text-5xl text-center font-extrabold">Featured Jobs</h1>
        <p className='text-center mt-4 '>Explore thousands of job opportunities with all the information you need. Its your future</p>

        <div className='grid md:grid-cols-2 grid-cols-1 gap-6 my-6'>
            {jobs.slice(0,datalength).map(job => <FeaturedCards key={job.id} job={job}/>)}
        </div>
        <button onClick={() => setdatalength(jobs.length)} className={` ${datalength === jobs.length && 'hidden'} btn mt-8 mb-28 text-center mx-auto flex items-center justify-end`}>See All Jobs</button>
    </div>
  )
}

export default FeaturedJobs