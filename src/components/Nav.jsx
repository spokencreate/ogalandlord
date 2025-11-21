import React from 'react'
import "../styles/Nav.css"
import Logo from "/images/logo.png"
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <div className='logo-container'>
        <img src={Logo} alt="" />
        <nav>
            <Link href="#">Home</Link>
            <Link href="#">Properties</Link>
            <Link href="#">How It Works</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Help Center</Link>
        </nav>
        <div className='nav-btns'>
            <button>Log In</button>
            <button>Create a new account</button>
            <button>Language</button>
        </div>
      </div>
    </>
  )
}

export default Nav
