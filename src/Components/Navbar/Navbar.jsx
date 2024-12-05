import React from "react";
import "./navbar.scss";
import { FaSearchengin } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import {useState,useEffect} from 'react'
const Navbar = () => {
  const [isScrolled,setScrolled]=useState(false);
/*window.onscroll=()=>{
  setScrolled(window.pageXOffset===0 ? false :true);
  return ()=>(window.pageYOffset=null);
}*/
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.pageYOffset === 0 ?false : true);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

console.log(isScrolled);
console.log(isScrolled);
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="image"
          />
          <span className='clipperbox'></span>
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <FaSearchengin  className='icon'/>
          <span>KID</span>
          <IoMdNotifications className='icon' />
          <img src='https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
          alt='' />
          <div className='profile'>
          <IoIosArrowDown  className='icon'/>
          <div className='options'>
             <span>Settings</span>
             <span>Logout</span>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
