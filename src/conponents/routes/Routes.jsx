import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import PrivateRoute from './PrivateRoute';
import Booking from '../pages/booking/Booking';
import RoomDetails from '../pages/room-details/RoomDetails';
import ErrorPage from '../pages/ErrorPage';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/room-details/:id",
          element: <RoomDetails></RoomDetails>
        },
        {
          path: "/booking",
          element: <PrivateRoute><Booking></Booking></PrivateRoute>
        }
      ]
    },
  ]);



export default router;
