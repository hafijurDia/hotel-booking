import React from 'react';
import Header from '../pages/shared/header/Header';
import Footer from '../pages/shared/footer/Footer';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main
