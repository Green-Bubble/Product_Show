import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, ADD_CARTS, DELETE_CARTS } from '../actions/types';

const initialState = {
  products: [],
  errors: '',
  carts : [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        errors: action.payload,
      };
    case ADD_CARTS:
      return {
        ...state,
        carts : [...state.carts, action.payload]
      };
    case DELETE_CARTS:
      const temp = state.carts.splice(action.payload, 1);
      return {
        ...state,
        carts : state.carts,
      };
    default:
      return state;
  }
};

export default cartReducer;