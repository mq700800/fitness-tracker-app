import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
         {/* Header Section Begin */}
      <header className="header-section">
        <div className="container">
          <div className="logo">
            <Link to='/' className='display-4'>
              <b style={{color:"#ffff "}}>Fit</b><b style={{color:"#f15d44"}}>ness</b>
            </Link>
          </div>
          <div className="nav-menu">
            <nav className="mainmenu mobile-menu">
              <ul>
              {/* className="active" */}
                <li className='mt-5'><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">About</Link></li>
                <li><Link to="/track">Tracker</Link></li>
                <li><Link to="/contactus">Contacts</Link></li>
                <li><Link to="/cards">Results</Link></li>
              </ul>
            </nav>
            <Link to='/track' className="primary-btn signup-btn">Sign Up Today</Link>
          </div>
          <div id="mobile-menu-wrap" />
        </div>
      </header>
      {/* Header End */}


    </div>
  )
}

export default Navbar