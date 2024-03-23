import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        <h1 className='text-4xl text-red-700 text-center'>Oppps !!!!!</h1>
        <Link className='btn btn-primary' to="/">Go Back</Link>
    </div>
  )
}

export default ErrorPage