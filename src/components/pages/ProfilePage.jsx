import React from 'react';

export default function ProfilePage({ user }) {
  return (
    <>
      <h1>ProfilePage</h1>
      <img src={user.image} style={{ width: '16rem' }} alt={user.firstName} />
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
    </>
  );
}
