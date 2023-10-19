import { SET_AUTH, ADD_USER } from '../actions/types';

const initialState = {
  auth : localStorage.getItem('auth') === 'true',
  users : [
    {
        name : 'BrianGamble',
        password : 'Victory!23'
    },
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      localStorage.setItem('auth', action.payload);
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