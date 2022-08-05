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
// New Approach to Create Reducer
import { createReducer } from '@reduxjs/toolkit';
import { updateStatus } from '../action/userAction';

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
  */
  // New Concept with action
  builder.addCase(updateStatus, (state, action) => ({
    ...state,
    status: action.payload,
  }));
});
export default userReducer;
