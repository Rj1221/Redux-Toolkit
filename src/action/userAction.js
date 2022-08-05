/* Old Concept of Redux
export const updateStatus = ( status ) => ( {
  type: 'UPDATE_STATUS',
  payload: status,
});
*/
// New Concept of Redux toolkit
import { createAction } from '@reduxjs/toolkit';

// Using Redux Toolkit createAction to create action for normal request not for async request
export const updateStatus = createAction('UPDATE_STATUS');

// Using Redux Toolkit createAction to create action for async request
export const fetchName = () => async (dispatch) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const result = await res.json();
  dispatch({ type: 'UPDATE_NAME', payload: result[0].name });
};
