import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../utils/auth';
import logo from '../../assets/images/PAlogo.png'; 

const Header = () => {
  // restricts access for only logged-in users
  const auth = AuthService.loggedIn();

  return (
    <header>
      <div className="logo-container">
      <img src={logo} alt="Site Logo" className="site-logo" />
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {auth ? (
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/" onClick={AuthService.logout}>Logout</Link></li>
            </>
                  ):
          (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;