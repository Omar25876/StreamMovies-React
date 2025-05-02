import React from 'react'
import Style from './Layout.module.css'
import { useState , useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return <>
   <Navbar/>
   <div className="container mx-auto py-10">
    <Outlet/>

   </div>
   <Footer/>
  </>
}
