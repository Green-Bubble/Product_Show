import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuth } from '../../actions/userActions';

export default function Login() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const navigate = useNavigate();

  const [uName, setUName] = useState('');
  const [uPassword, setUPassword] = useState('');

  const [errors, setErrors] = useState({
    name: '',
    password: '',
    other: '',
  });

  const validate = () => {
    let newErrors = {
      name: '',
      password: '',
      other: '',
    };

    if (uName.length === 0) {
      newErrors.name = 'Name is required';
    }

    if (uPassword.length === 0) {
      newErrors.password = 'Password is required';
    } else if (uPassword.length < 6) {
      newErrors.password = 'Password needs to be at least 6 characters.';
    }

    const matchingUser = users.find((user) => user.name === uName && user.password === uPassword);
    if (!matchingUser) {
      newErrors.other = 'Wrong Username or Password.';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error.length === 0);
  };

  const handleNameChange = (e) => {
    setUName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setUPassword(e.target.value);
  };

  const signin = () => {
    if (validate()) {
      dispatch(setAuth(true));
      localStorage.setItem('auth', true);
      navigate('/productlist');
    }
  };

  return (
    <div className="w-full max-w-xs my-32 mx-auto">
      <form className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={uName}
            onChange={handleNameChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name && 'border-red-500'}`}
            placeholder="Username"
          />
          {errors.name.length > 0 && <p className="text-red-500 text-xs italic">{errors.name}</p>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={uPassword}
            onChange={handlePasswordChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password && 'border-red-500'}`}
            placeholder="******************"
          />
          {errors.password.length > 0 && <p className="text-red-500 text-xs italic">{errors.password}</p>}
          {errors.other.length > 0 && <p className="text-red-500 text-xs italic">{errors.other}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={signin}
            className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/forgot">
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy; 2023 Shopping Center!
      </p>
    </div>
  );
}