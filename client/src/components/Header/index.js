import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  }; 

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          
          <h1><i class="fas fa-comments"></i>NotTwitter</h1>
        </Link>

        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
              <Link to="/profile"><i class="fas fa-user"></i> Me</Link>
              <a href="/" onClick={logout}>
              <i class="fas fa-sign-out-alt"></i> Logout
              </a>
            </>
          ) : (
            <>
              <Link to="/login"><i class="fas fa-sign-in-alt"></i> Login</Link>
              <Link to="/signup"><i class="fas fa-user-plus"></i> Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
