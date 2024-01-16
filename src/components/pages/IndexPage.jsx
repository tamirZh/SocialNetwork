import React from 'react';
import UserCard from '../UI/UserCard';

export default function IndexPage({ allUsers }) {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center">Возможно вы их знаете</h1>
      <div className="grid grid-cols-4 gap-4 text-center">
        { allUsers?.map((oneUser) => <UserCard key={oneUser.id} oneUser={oneUser} />)}
      </div>
    </div>
  );
}
