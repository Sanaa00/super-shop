import { NavLink, Outlet } from 'react-router-dom'
import './Sidbar.style.css'
import {  useEffect, useState } from 'react';
import { TbCategory } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";
import Navbar from '../Navbar/Navbar';
import Welcomscreen from '../welcomeScreen/WelcomScreen';
function Sidbar() {
 const [showWelcomeScreen,setShowWelcomeScreen]=useState(true)
  const [open,setOpen]=useState(false)
    
  const toggle = () => {
    setOpen(!open)
  }
   useEffect(() => {
   setTimeout(() => {
      setShowWelcomeScreen(false);
    }, 5000);

  }, []); 
 if(showWelcomeScreen) return <Welcomscreen/>
  return (
    <div className='grid'>
      <div className='sidbar' style={{width:open?"20%":"10%"}}>
        <div className='menu'>
          <AiOutlineMenu className='menu-icon' onClick={()=>toggle()} />
        </div>
        
        <NavLink to="/"
          style={{ width: open ? "" : "50px" }}
          className={({isActive})=>isActive?"active-item":"non-active-item" }>
          <span >
            <TbCategory className='sidbar_icons' />
          </span>
          {open?  <p className='sidbar-links'>Products</p>:null}
         </NavLink>
      </div>
      <div className='content-sidbar'  style={{ width: open ? "80%" : "90%" }}>
        <Navbar/>
        <Outlet/>
      </div>
  
    </div>
  )
}

export default Sidbar
