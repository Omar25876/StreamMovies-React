import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-[#5857B0] hover:text-[#5857B0]' : 'text-white hover:text-[#5857B0]';

  return (
    <nav className='bg-transparent table-fixed top-0 end-0 start-0 text-white w-full'>
      <div className="pt-3 pl-3 flex flex-col lg:justify-between lg:flex-row lg:items-center">
        <div className="links flex flex-col lg:flex-row lg:items-center gap-1">
          <h3 className='text-white font-extrabold text-2xl'>
            Stream <span className='text-[#5857B0] font-extrabold'>Movies</span>
          </h3>
          <ul className='flex flex-col lg:flex-row'>
            <li className='font-semibold text-xl px-5 py-2'>
              <NavLink to="" className={navLinkClass}>Home</NavLink>
            </li>
            <li className='font-semibold text-xl px-5 py-2'>
              <NavLink to="categories" className={navLinkClass}>TV</NavLink>
            </li>
          </ul>
        </div>

  

        <div className="">
          
          <ul className='flex flex-col lg:flex-row lg:items-center'>
          <form onSubmit={handleSearch} className="flex items-center mb-2 mr-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search movies..."
            className="px-4 py-2 rounded-l-lg text-black"
          />
          <button
            type="submit"
            className="bg-[#5857B0] text-white px-4 py-2 rounded-r-lg hover:bg-[#5827B0]"
          >
            Search
          </button>
        </form>
            <NavLink to='login'>
              <button className="mr-5 mb-2 text-white font-semibold bg-[#5857B0] rounded-lg text-xl px-8 py-2 hover:bg-[#5827B0]">Login</button>
            </NavLink>
            <NavLink to='register'>
              <button className="mr-5 mb-2 text-white font-semibold bg-[#5857B0] rounded-lg text-xl px-5 py-2 hover:bg-[#5827B0]">Register</button>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
