import { FETCH_PRODUCTS, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from './types';

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