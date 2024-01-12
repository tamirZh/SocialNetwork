import React from 'react';

export default function ProfilePage({ user }) {
  return (
    <>
      <h1>ProfilePage</h1>
      <img src={user.image} alt={user.firstName} />
      <ul>
        <li>{user.firstName}</li>
        <li>{user.secondName}</li>
        <li>{user.sex}</li>
        <li>{user.email}</li>
        <li>{user.dateOfBirth}</li>
        <li>{user.description}</li>
      </ul>
    </>
  );
}
