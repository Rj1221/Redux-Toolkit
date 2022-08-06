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
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Raj',
  status: 'coder',
  age: 25,
};
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
