import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => (
  <header>
    <nav className="d-flex justify-content-center">
      <div className='d-flex justify-content-end' id="nav-login-signup">
          <div className="mr-auto p-2">
          <div className="nav-link"><Link to='/'>Apps</Link></div>
         </div>
          <div className="nav-link"><Link to='/Register'>Register</Link></div>
          <div className="nav-link"><Link to='/Profile'>Profile</Link></div>
        </div>
    </nav>
  </header>
)
export default Header
