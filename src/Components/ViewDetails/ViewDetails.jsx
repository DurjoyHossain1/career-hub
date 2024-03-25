import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveJobAplication } from '../../Utils/LocalStorage';

const ViewDetails = () => {

  const jobs = useLoaderData()
  const {id} = useParams()
  const idInt = parseInt(id)
  const serch = jobs.find(job => job.id === idInt);
  const {job_description,job_responsibility,educational_requirements,experiences,salary,job_title
  } = serch


    const handelApplyJob = () => { 
      saveJobAplication(idInt)
      toast.success("Apply Seccessfull")
 
    };
 
   
  return (
    <div>
        <div className='grid grid-cols-4 my-24 gap-6'>
          <div className='   col-span-3'>
            <h3 className='text-base'> <span className='font-bold'>Job Description:</span> {job_description}</h3>
            <h3 className='text-base mt-6 '><span className='font-bold'>Job Responsibility:</span> {job_responsibility}</h3>
            <h2 className='font-bold mt-6 mb-4'>Educational Requirements:</h2>
            <h4>{educational_requirements}</h4>
            <h5 className='mt-6 mb-4 font-bold'>Experiences:</h5>
            <h6>{experiences}</h6>
          </div>
          <div className=''>
            <div className='bg-red-200 p-7 opacity-90'>
             <h3 className='text-xl font-semibold '>Job Details</h3>
             <hr  className='my-6'/>
             <h3>   <span></span>  <span className='font-bold'>Salary :</span> {salary}</h3>
             <h3>   <span></span>  <span className='font-bold'>Job Title :</span> {job_title}</h3>
             <h4 className='mt-8 mb-6'>Contact Information</h4>
             <hr  className='mb-6'/>
             <h3>   <span></span>  <span className='font-bold'>Phone :</span> {job_title}</h3>
             <h3>   <span></span>  <span className='font-bold'>Email :</span> {job_title}</h3>
             <h3>   <span></span>  <span className='font-bold'>Address :</span> {job_title}</h3>
            </div>
            <button onClick={handelApplyJob} className='btn btn-secondary w-full mt-6'>Apply Now</button>
            <ToastContainer />
          </div>
        </div>
    </div>
  )
}

export default ViewDetails