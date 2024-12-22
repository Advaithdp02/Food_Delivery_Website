import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
const Navbar = ({setShowLogin}) => {

    const [menu,setMenu]=useState("home");

  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""} >Home</li>
            <li onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}  >Menu</li>
            <li onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"?"active":""} >mobile-app</li>
            <li onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""} >Contact us</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot">

                </div>
                <button onClick={()=> setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
