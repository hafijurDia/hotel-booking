import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/home/Home';
import About from '../pages/about/About';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/about",
            element: <About></About>
        },
      ]
    },
  ]);



export default router;
