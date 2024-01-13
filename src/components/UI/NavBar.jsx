import React from 'react';

export default function NavBar({ user }) {
  return (
    <nav className="navbar navbar-expand bg-body-tertiary">
      <ul>
        <li>
          <a className="nav-link active" href="/">Главная</a>
        </li>
        {user ? (
          <>
            <li>
              <a className="nav-link active" aria-current="page" href="/profile">Моя страница</a>
            </li>
            <li>
              <a className="nav-link active" aria-current="page" href="/friends">Друзья</a>
            </li>
          </>
        ) : null}
        <li>
          <a className="nav-link active" href="/albums">Фотографии</a>
        </li>
        {user ? null : (
          <>
            <li>
              <a className="nav-link active" aria-current="page" href="/auth/login">Вход</a>
            </li>
            <li>
              <a className="nav-link active" aria-current="page" href="/auth/signup">Регистрация</a>
            </li>
          </>
        )}

        {user ? (
          <li>
            <a className="nav-link active" aria-current="page" href="/logout">Выйти</a>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}
