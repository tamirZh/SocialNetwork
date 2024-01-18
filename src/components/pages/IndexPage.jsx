import React, { useState } from 'react';
import UserCard from '../UI/UserCard';

export default function IndexPage({ allUsers }) {
  const [currentAllUsers, setCurrentUsers] = useState(allUsers);
  const clickHandler = async (id) => {
    const res = await fetch(`/api/user/${id}`, {
      method: 'PATCH',
    });
    if(res.ok) {
      setCurrentUsers((prev)=> prev)
    }
  };
  return (
    <div className="container w-4/5 mx-auto px-4 ">
      <h1 className="text-center text-2xl my-3">Возможно вы их знаете</h1>
      <div className="grid grid-cols-5 gap-4 text-center">
        { currentAllUsers?.map((oneUser) => <UserCard key={oneUser.id} oneUser={oneUser} clickHandler={clickHandler} />)}
      </div>
    </div>
  );
}
