import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Statistics from './Components/Statistics/Statistics';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';
import ViewDetails from './Components/ViewDetails/ViewDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    errorElement: <ErrorPage />,
    children:[
      {
      path:"/",
      element: <Statistics/>
      },
      {
      path:"/applied-jobs",
      element: <AppliedJobs/>,
      loader: () => fetch('/jobs.json')
      },
      {
      path:"/blog",
      element: <Blog/>
      },
      {
      path:"/job/:id",
      element: <ViewDetails/>,
      loader: () => fetch('/jobs.json')
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
