import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Reducer/userReducer';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  // preloadedState: initialState,
});

export default store;
