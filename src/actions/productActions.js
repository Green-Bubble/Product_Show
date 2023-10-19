import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, ADD_CARTS, DELETE_CARTS } from './types';

export const fetchProducts = (cnt) => ({
  type: FETCH_PRODUCTS,
  payload: cnt,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (errors) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: errors,
});

export const addCarts = ( data ) => ({
  type: ADD_CARTS,
  payload: data,
});

export const deleteCarts = ( index ) => ({
  type: DELETE_CARTS,
  payload: index,
});