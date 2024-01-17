import React from 'react';

export default function ProfilePage({ user }) {
  return (
    <div className="container mx-auto py-4 w-80">
      <h1 className="text-2xl">ProfilePage</h1>
      <img src={user.image} alt={user.firstName} />
      <ul>
        <li>
          Имя:
          {' '}
          {user.firstName}
        </li>
        <li>
          Фамилия:
          {' '}
          {user.secondName}
        </li>
        <li>
          Пол:
          {' '}
          {user.sex}
        </li>
        <li>
          Почта:
          {' '}
          {user.email}
        </li>
        <li>
          Дата рождения:
          {' '}
          {user.dateOfBirth}
        </li>
        <li>
          О себе:
          {' '}
          {user.description}
        </li>
      </ul>
    </div>
  );
}
