import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_PRODUCTS } from '../actions/types';
import { fetchProductsSuccess, fetchProductsFailure } from '../actions/productActions';

function* fetchProductsSaga(action) {
  let url = "https://fakestoreapi.com/products?limit=" + (action.payload+15);
  try {
    const response = yield call(() => axios.get(url));
    yield put(fetchProductsSuccess(response.data));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

function* productSaga() {
  yield takeLatest(FETCH_PRODUCTS, fetchProductsSaga);
}

export default productSaga;