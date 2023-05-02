import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Banner from './components/Banner/Banner';
import Chefs from './components/Chefs/Chefs';
import SingleChefsData from './components/SingleChefsData/SingleChefsData';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/data",
        element: <Chefs></Chefs>,
      },
      {
        path: "/data/:id",
        element: <SingleChefsData></SingleChefsData>,
        loader:({params}) => fetch(`https://assignment-10-server-pd4ecxg74-tanvirsayem99.vercel.app/data/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
