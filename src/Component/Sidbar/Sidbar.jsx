import { NavLink, Outlet } from 'react-router-dom'
import './Sidbar.style.css'
import { useEffect, useState } from 'react';
import WelcomScreen from '../welcomeScreen/Welcomscreen';
import { TbCategory } from "react-icons/tb";
import { AiOutlineMenu } from "react-icons/ai";
import Navbar from '../Navbar/Navbar';
function Sidbar() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [open,setOpen]=useState(false)
    
  const toggle = () => {
    setOpen(!open)
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
         setShowWelcome(false);
    }, 5000);

    return () => clearTimeout(timeout);
    }, [showWelcome, setShowWelcome]);
  
  
  if(showWelcome)return <WelcomScreen/>
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
