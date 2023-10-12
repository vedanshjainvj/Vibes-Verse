import React from 'react';
import { Link, Outlet,NavLink} from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png'
import CustomScroll from './CustomScroll'

const Navbar = () => {
  return (
    <>
    <CustomScroll/>
    <nav className='w-full flex justify-between items-center px-[7vw] pt-[3vw] pb-[1vw] bg-black nav-container'>
      <img className='w-[13vw] logox' src={logo} alt="" />
      <div className='nav-elements flex gap-8 text-[1.4vw]'>
      <Link className="text-white navlink"  to="/">Home</Link>
          <Link className="text-white navlink" to="/about">About</Link>
          <Link className="text-white navlink" to="/internship">Internships</Link>
          <Link className="text-white navlink" to="/swagkit">Swag Kit</Link>
          <Link className="text-white navlink" to="/contact">Contact</Link>
      </div>
      <button className='loginbtn'>Login</button>
      <div className='menuicon text-3xl'>
      <ion-icon name="menu"></ion-icon>
      </div>
      

    </nav>
      <Outlet />

    </>
  );
};

export default Navbar;
