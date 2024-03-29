import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'

import { TabContext } from '../../contexts/TabContext'




function Navbar() {
  // const { updateDropdownTab } = useContext(TabContext);
  return (
    <div className='navbar'>
        <div className='navbar__container'>
          <Link to='/'>
            <img src={logo} alt="" className='nav__logo' />
          </Link>
    <div className='navbar_comp'>
     <div className='navbar_links'>
    <Link className='nav_links' to='/'>
      Home
    </Link>
    <Link className='nav_links' to='/about'>
      About
    </Link>
    <Link className='nav_links'to ='/teacher'>
      Teacher
          </Link>
    <Link className='nav_links' to='/student'>
      Student
    </Link>
    <Link className='nav_links' to='/contactus'>
      Contact Us
    </Link>
    </div>
    
</div>

          <div className='nav__btns'>
            <Link to='/login'>
              <button>Login</button>
            </Link>
            <Link to='/signup'>
            <button>Sign up</button>
            </Link>
            
          </div>
        </div> 
    
  
</div>

  )
}

export default Navbar