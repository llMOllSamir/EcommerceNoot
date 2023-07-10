import React from 'react'
import NavBar from '../NavBar/NavBar'
import {Outlet} from 'react-router-dom';
import Footer from '../Footer/Footer';
import Svg from '../SVG/SVG';

export default function Layout() {
  return (
    <>
    <NavBar/>
 
    <div className='footerFixed'> 
    <Outlet/>
    <Footer/>
    </div>
    </>
  )
}
