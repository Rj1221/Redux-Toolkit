import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Profile = () => {
  const { name, age: userAge, status } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const updateAge = (age) => {
    dispatch({ type: 'UPDATE_AGE', payload: age });
  };
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: { name }</p>
      <p>Age: { userAge }</p>
      <p>Status: { status }</p>
      <button type="button" onClick={() => updateAge(40)}>Edit</button>
    </div>
  );
};

export default Profile;
