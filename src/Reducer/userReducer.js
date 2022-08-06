/* Old Approach to Create Reducer
const initialState = {
  name: 'Raj',
  status: 'coder',
  age: 25,
};
export default (state = initialState, action) => {
  if (action.type === 'UPDATE_AGE') {
    return {
      ...state,
      age: action.payload,
    };
  }
  return state;
};
*/
// Create Slice Method to Create Reducer with State and Action
// Note :- For this we don't need to create action creator becoz slice internally use createAction and createReducer
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  name: 'Raj',
  status: 'coder',
  age: 25,
};
export const fetchUser = createAsyncThunk(
  'fetchUser',
  async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data[Math.floor(Math.random() * 10)].name;
  },
);
const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
    },
    updateStatus(state, action) {
      state.status = action.payload;
    },
    updateAge(state, action) {
      state.age = action.payload;
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.name = 'Loading...';
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.name = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      state.name = action.error;
    },
  },
});
export default userReducer.reducer;
export const { updateName, updateStatus, updateAge } = userReducer.actions;

/*
// New Approach to Create Reducer

// import { updateStatus } from '../action/userAction';
// import { createReducer } from '@reduxjs/toolkit';
const initialState = {
  name: 'Raj',
  status: 'coder',
  age: 25,
};
export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase('UPDATE_AGE', (state, action) => ({
    ...state,
    age: action.payload,
  }));
  builder.addCase('UPDATE_NAME', (state, action) => ({
    ...state,
    name: action.payload,
  }));
  /* Old Concept with action
  builder.addCase('UPDATE_STATUS', (state, action) => ({
    ...state,
    status: action.payload,
  }));

  // New Concept with action
  builder.addCase(updateStatus, (state, action) => ({
    ...state,
    status: action.payload,
  }));
});
export default userReducer;
*/
