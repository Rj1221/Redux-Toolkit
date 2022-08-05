/* Old Concept of Redux
export const updateStatus = ( status ) => ( {
  type: 'UPDATE_STATUS',
  payload: status,
});
*/
// New Concept of Redux toolkit
import { createAction } from '@reduxjs/toolkit';

export const updateStatus = createAction('UPDATE_STATUS');
