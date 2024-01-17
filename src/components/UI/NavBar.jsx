import React from 'react';

export default function NavBar({ user }) {
  return (
    <div className="container w-4/5 mx-auto px-4">
      <nav className="mx-auto flex justify-between text-base py-4 border-b-2 border-blue-200 mb-8">
        <a className="w-3/5" href="/">Logo</a>
        <ul className="flex w-2/5 justify-between">
          <li className="bg-indigo-200 rounded-lg p-2 mx-3 hover:bg-indigo-400">
            <a className="nav-link active" href="/">Главная</a>
          </li>
          {user ? (
            <>
          <li className="bg-indigo-200 rounded-lg p-2 mx-3 hover:bg-indigo-400 whitespace-nowrap">
                <a className="nav-link active" aria-current="page" href="/profile">Моя страница</a>
              </li>
              <li className="bg-indigo-200 rounded-lg p-2 mx-3 hover:bg-indigo-400">
                <a className="nav-link active" aria-current="page" href="/friends">Друзья</a>
              </li>
            </>
          ) : null}
          <li className="bg-indigo-200 rounded-lg p-2 mx-3 hover:bg-indigo-400">
            <a className="nav-link active" href="/albums">Фотографии</a>
          </li>
          {user ? null : (
            <>
          <li className="bg-indigo-200 rounded-lg p-2 mx-3 hover:bg-indigo-400">
                <a className="nav-link active" aria-current="page" href="/auth/login">Вход</a>
              </li>
              <li className="bg-indigo-200 rounded-lg p-2 mx-3 hover:bg-indigo-400">
                <a className="nav-link active" aria-current="page" href="/auth/signup">Регистрация</a>
              </li>
            </>
          )}

          {user ? (
          <li className="bg-indigo-200 rounded-lg p-2 mx-3 hover:bg-indigo-400">
          <a className="nav-link active" aria-current="page" href="/logout">Выйти</a>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
}
