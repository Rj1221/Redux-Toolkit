import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAge as updateUserAge, updateName as updateUserName, updateStatus as updateUserState } from '../../Reducer/userReducer';

const Profile = () => {
  const { name: userName, age: userAge, status: userStatus } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const updateAge = (age) => {
    dispatch(updateUserAge(age));
  };
  const updateName = (name) => {
    dispatch(updateUserName(name));
  };
  const updateStatus = (status) => {
    dispatch(updateUserState(status));
  };
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: { userName }</p>
      <p>Age: { userAge }</p>
      <p>Status: { userStatus }</p>
      <div>
        <button type="button" onClick={() => updateAge(40)}>Update Age</button>
        <button type="button" onClick={() => updateName('RajaBabu')}>Update Name</button>
        <button type="button" onClick={() => updateStatus('Programmer')}>Update Status</button>
      </div>
    </div>
  );
};

export default Profile;
