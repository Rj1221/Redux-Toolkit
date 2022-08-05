import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { name, age, status } = useSelector((state) => state);
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: { name }</p>
      <p>Age: { age }</p>
      <p>Status: { status }</p>
    </div>
  );
};

export default Profile;
