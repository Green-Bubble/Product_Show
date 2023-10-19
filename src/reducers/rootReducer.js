import { combineReducers } from 'redux';
import productReducer from './productReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  // Add more reducers here if needed
});

export default rootReducer;