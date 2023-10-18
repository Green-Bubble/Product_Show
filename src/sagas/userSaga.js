import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
//import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS } from '../actions/types';

function* fetchProductsSaga() {
  try {
    const response = yield axios.get('/api/products'); // Adjust the API endpoint accordingly
    //yield put({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

function* productSaga() {
  //yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}

export default productSaga;