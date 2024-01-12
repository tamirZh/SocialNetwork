import React from 'react';

export default function NavBar({ user }) {
  
  return (
    <nav className="navbar navbar-expand bg-body-tertiary">
      <a className="navbar-brand" href="/">Home</a>
      {user ? null : (
        <>
          <a className="nav-link active" aria-current="page" href="/auth/login">Login</a>
          <a className="nav-link active" aria-current="page" href="/auth/signup">Signup</a>
        </>
      )}
      {user ? (
        <a className="nav-link active" aria-current="page" href="/logout">Logout</a>
      ) : null}
      {user ? (
        <a className="nav-link active" aria-current="page" href="/profile">Profile</a>
      ) : null}

      {/* <a className="nav-link" href="/articles">Articles</a> */}
    </nav>
  );
}
