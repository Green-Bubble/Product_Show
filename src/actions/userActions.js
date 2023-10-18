import { SET_AUTH, ADD_USER } from './types';

export const setAuth = (auth) => ({
  type: SET_AUTH,
  payload: auth,
});

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});