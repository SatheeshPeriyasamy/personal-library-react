import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/config';
import useAuth from '../hooks/useAuth';

const Header = () => {
  const user = useAuth();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log('User signed out');
    }).catch((error) => {
      console.error('Error signing out: ', error);
    });
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#f5f5f5' }}>
      <h1 style={{ flex: 1 }}>Personal Library</h1>

      {user && (
        <div style={{ position: 'relative' }}>
          {/* User's profile picture */}
          <img
            src={user.photoURL}
            alt={user.displayName}
            style={{ width: '40px', height: '40px', borderRadius: '50%', cursor: 'pointer' }}
            onClick={toggleDropdown}  // Show/hide the dropdown when clicked
          />

          {/* Dropdown menu */}
          {dropdownVisible && (
            <div style={{
              position: 'absolute',
              right: 0,
              top: '100%',
              backgroundColor: 'white',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              padding: '10px',
              borderRadius: '8px',
              zIndex: 1,
            }}>
              <button onClick={handleSignOut} style={{ border: 'none', background: 'none', cursor: 'pointer', padding: '5px 10px' }}>
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
