import React from 'react';
import UserCard from '../UI/UserCard';

export default function IndexPage({ allUsers }) {
  return (
    <div
      className="row"
    >
      <h1>Возможно вы их знаете</h1>
      { allUsers?.map((oneUser) => <UserCard key={oneUser.id} oneUser={oneUser} />)}
    </div>
  );
}
