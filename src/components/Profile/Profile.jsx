import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateStatus as update, fetchName } from '../../action/userAction';

const Profile = () => {
  const { name: userName, age: userAge, status: userStatus } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const updateAge = (age) => {
    dispatch({ type: 'UPDATE_AGE', payload: age });
  };
  const updateName = async () => {
    // We can do async stuff here but its not a proper way we should do it in action
    // const res = await fetch('https://jsonplaceholder.typicode.com/users');
    // const result = await res.json();
    // dispatch({ type: 'UPDATE_NAME', payload: result[0].name });
    dispatch(fetchName());
  };
  const updateStatus = (status) => {
    dispatch(update(status));
  };
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: { userName }</p>
      <p>Age: { userAge }</p>
      <p>Status: { userStatus }</p>
      <div>
        <button type="button" onClick={() => updateAge(40, 'RajuRastogi')}>Update Age</button>
        <button type="button" onClick={() => updateName()}>Update Name</button>
        <button type="button" onClick={() => updateStatus('Programmer')}>Update Status</button>
      </div>
    </div>
  );
};

export default Profile;
