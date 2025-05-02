import React from 'react'
import Style from './Navbar.module.css'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/freshcart-logo.svg'
export default function Navbar() {
  return <>
    <nav className='bg-gray-300 lg:fixed top-0 end-0 start-0'>
      <div className="p-3 flex flex-col lg:justify-between lg:flex-row lg:items-center">
        <div className="links flex flex-col lg:flex-row lg:items-center ">
          <img width={120} src={logo} alt="" />
          <ul className='flex flex-col lg:flex-row'>
            <li className='px-3 py-2'><NavLink to=''>Home</NavLink></li>
            <li className='px-3 py-2'><NavLink to='products'>Products</NavLink></li>
            <li className='px-3 py-2'><NavLink to='brands'>Brands</NavLink></li>
            <li className='px-3 py-2'><NavLink to='categories'>Categories </NavLink></li>
            <li className='px-3 py-2'><NavLink to='cart'>Cart </NavLink></li>
          </ul>

        </div>
        <div className="icons">
          <ul className='flex flex-col lg:flex-row lg:items-center'>
            <li className='px-3 py-2'><NavLink to='signup'>Register</NavLink></li>
            <li className='px-3 py-2'><NavLink to='signin'>Login</NavLink></li>
            <li className='px-3 py-2'><span className='cursor-pointer' to=''>Logout</span></li>
            <li>
              <i className='fab px-3 fa-facebook'></i>
              <i className='fab px-3 fa-instagram'></i>
              <i className='fab px-3 fa-tiktok'></i>
              <i className='fab px-3 fa-youtube'></i>
            </li>

          </ul>
        </div>

      </div>

    </nav>


  </>
}
