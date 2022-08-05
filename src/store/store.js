import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  name: 'Raj',
  age: 25,
  status: 'coder',
};
const store = configureStore({
  reducer: (state) => state,
  preloadedState: initialState,
});

export default store;
