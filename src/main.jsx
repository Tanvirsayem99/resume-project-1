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
import Register from './components/identity/Register';
import Login from './components/identity/Login';
import Blog from './components/Blog/Blog';
import FamousFood from './components/FamousFood/FamousFood';
import Home from './components/Home/Home';
import AuthProvider, { AuthContext } from './AuthProvider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Hotels from './components/Hotels/Hotels';
import ErrorPage from './components/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/foods",
        element: <FamousFood></FamousFood>,
      },
      {
        path: "/hotel",
        element: <Hotels></Hotels>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/data",
        element: <Chefs></Chefs>,
      },
      {
        path: "/data/:id",
        element: <PrivateRoute><SingleChefsData></SingleChefsData></PrivateRoute>,
        loader:({params}) => fetch(`https://assignment-10-server-tanvirsayem99.vercel.app/data/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
