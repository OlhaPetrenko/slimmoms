import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';

import authReducer from './auth/auth-slice';
import dailyRateReducer from './dailyRate/dailyRate-slice';
import dayReducer from './day/day-slice';
import productReducer from './product/product-slice';
import userReducer from './user/user.slice';

const rootReducer = combineReducers({
  auth: authReducer,
  dailyRate: dailyRateReducer,
  day: dayReducer,
  product: productReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
