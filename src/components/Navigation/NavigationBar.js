import React from 'react';
import { setAuth } from '../../actions/userActions';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = ( ) => {
  const isAuth = useSelector((state) => state.user.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    dispatch(setAuth(false));
  };
  
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-xl">My Website</div>
          <ul className="flex space-x-4">
            {isAuth && (
              <li><a href="/login" onClick={handleLogout} className="text-white hover:underline">Logout</a></li>
            )}
            {!isAuth && (
              <>
                <li><a href="/login" className="text-white hover:underline">Login</a></li>
                <li><a href="/register" className="text-white hover:underline">Register</a></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;