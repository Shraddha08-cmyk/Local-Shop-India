import React from 'react'
import logo from '../../images/logo.png';
import './Navbar.css';
import { FaShoppingCart } from 'react-icons/fa';
import { IoIosContact } from 'react-icons/io';
import { IoMdInformationCircle } from 'react-icons/io';
import { GoThreeBars } from 'react-icons/go';

const Navbar = () => {
  return (
    <div className='nav'>
      <img className='logo-img' src={logo} alt="logo" />
      <GoThreeBars className='three-lines' />
      <div className="navbar">
      <div className="cart">
        <p className='cart-icon' >
          <FaShoppingCart />
        </p>
        <h6 className='cart-text'>Cart</h6>
      </div>
      <div className="contact">
        <p className="contact-icon">
          <IoIosContact />
        </p>
        <h6 className='contact-text'>Contact Us</h6>
      </div>
      <div className="sign-in">
        <p className="sign-icon">
          <IoIosContact />
        </p>
        <h6 className='sign-text'>Sign In</h6>
      </div>
      <div className="about">
        <p className="about-icon">
        <IoMdInformationCircle />
        </p>
        <h6 className="about-text">About Us</h6>
      </div>
      <hr style={{width:"1200px", position:"relative", bottom:"240px"}} />
      </div>
    </div>
  )
}

export default Navbar
