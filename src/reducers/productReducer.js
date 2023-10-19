import { act } from 'react-dom/test-utils';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';
import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../actions/types';

const initialState = {
  products: [],
  errors: '',
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        products: action.payload,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;