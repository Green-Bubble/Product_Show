import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser } from '../../actions/userActions';
import { useNavigate } from 'react-router-dom';

function Register() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const navigate = useNavigate();

  const [uName, setUName] = useState('');
  const [uPassword, setUPassword] = useState('');
  const [uRePassword, setURePassword] = useState('');
  
  const [errors, setErrors] = useState({
    name: '',
    password: '',
    repassword: '',
    other: '',
  });

  const validate = () => {
    let newErrors = {
      name: '',
      password: '',
      repassword: '',
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

    if (uRePassword.length === 0) {
      newErrors.repassword = 'Re-Password is required';
    } else if (uRePassword.length < 6) {
      newErrors.repassword = 'Re-Password needs to be at least 6 characters.';
    }

    if (uPassword !== uRePassword) {
      newErrors.other = "Passwords do not match!";
    }

    if (users.find((user) => user.name === uName)) {
      newErrors.other = "User already exists!";
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

  const handleRePasswordChange = (e) => {
    setURePassword(e.target.value);
  };

  const register = () => {
    if (validate()) {
      localStorage.setItem('auth', true);
      dispatch(addUser({ uName, uPassword }));
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

          <label htmlFor="repassword" className="block text-gray-700 text-sm font-bold mb-2">
            Re-Password
          </label>
          <input
            type="password"
            id="repassword"
            value={uRePassword}
            onChange={handleRePasswordChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" ${errors.repassword && 'border-red-500'}`}
            placeholder="******************"
          />
          {errors.repassword.length > 0 && <p className="text-red-500 text-xs italic">{errors.repassword}</p>}
          {errors.other.length > 0 && <p className="text-red-500 text-xs italic">{errors.other}</p>}
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={register}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Register
          </button>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">&copy; 2023 Shopping Center!</p>
    </div>
  );
}

export default Register;