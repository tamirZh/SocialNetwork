import React from 'react';

export default function UserCard({ oneUser, clickHandler }) {
  return (
    <div>
      <div className="block rounded-lg p-8  transition duration-500 easy-in-out bg-blue-100 hover:bg-blue-400 ">
        <img src={oneUser.image} className="rounded-t-lg" alt={oneUser.firstName} />
        <div className="card-body">
          <h5 className="card-title">
            {oneUser.firstName}
            {' '}
            {oneUser.secondName}
          </h5>
          <h5 className="card-title">{oneUser.dateOfBirth}</h5>
          <h5 className="card-title">{oneUser.description}</h5>

          <button onClick={() => clickHandler(oneUser.id)} type="button" className="bg-red-100 rounded-lg">Добавить в друзья</button>
        </div>
      </div>
    </div>
  );
}
