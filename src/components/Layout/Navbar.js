import React from 'react'
import { NavLink} from 'react-router-dom';
import logo from '../img/logo.png';



const Navbar = () => {
  return (
    <section className='navbar'>
      <div className='container'>
        <div className='col-md-5'>
          <div className='menuicon'>
            {/* <img src="./components/img/menu.png" alt="menu-icon" height="512" width="512" /> */}
          </div>
          <ul>
            <li className='nav-links '>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className="nav-links">
              <NavLink to='/category'>Category</NavLink>
            </li>
            <li className="nav-links">
              <NavLink to='/about'>About Us</NavLink>
            </li>
            <li className='nav-links'>
              <NavLink to='/contact'>Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className='col-md-2 text-center'>
          <img src={logo} alt="logo" />
        </div>
        <div className='col-md-5 right-nav'>
          <div className='phone-login'>
            <NavLink to='/login'>Login</NavLink>
          </div>
          <ul id='pull-right'>
            <li>
              <NavLink to='/sign'>Sign Up</NavLink>
            </li>
            <li className='custtom-btn'>
              <NavLink to='/login'>Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Navbar
