import { act } from 'react-dom/test-utils';
import { SET_AUTH, ADD_USER } from '../actions/types';

const initialState = {
  auth : false,
  users : [
    {
        name : 'Daniel',
        password : 'Daniel'
    },
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      console.log(action.payload)
      return {
        auth: action.payload,
      };
    case ADD_USER:
      return {
        users : [...state.users, action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;