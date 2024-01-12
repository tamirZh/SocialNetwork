import React from 'react';
import UserCard from '../UI/UserCard';

export default function IndexPage({ allUsers }) {
  console.log(allUsers);
  return (
    <div>
      <h1>Возможно вы их знаете</h1>
      { allUsers?.map((oneUser) => {
        // console.log(oneUser);
          <UserCard key={oneUser.id} oneUser={oneUser} />;
      })}
    </div>
  );
}
