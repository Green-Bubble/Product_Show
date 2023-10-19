import React from 'react';
import { setAuth } from '../../actions/userActions';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

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
          <div className="text-white font-bold text-xl">Shopping Center</div>
          <ul className="flex space-x-4">
            {isAuth && (
              <>
                <li><Link to="/productlist" className="text-white hover:underline">Products</Link></li>
                <li><Link to="/mycarts" className="text-white hover:underline">My Carts</Link></li>
                <li><Link to="/login" onClick={handleLogout} className="text-white hover:underline">Logout</Link></li>
              </>
            )}
            {!isAuth && (
              <>
                <li><Link to="/login" className="text-white hover:underline">Login</Link></li>
                <li><Link to="/register" className="text-white hover:underline">Register</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;