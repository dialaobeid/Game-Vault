import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, logout } from '../../utils/auth';

const Header = () => {
  // restricts access for only logged-in users
  const auth = isAuthenticated();

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {auth ? (
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/library">Library</Link></li>
              <li><Link to="/" onClick={logout}>Logout</Link></li>
            </>
          ) : (
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