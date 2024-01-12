import React from 'react';

export default function UserCard({ oneUser }) {
  console.log(oneUser, '-->>>>');
  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src={oneUser.image} className="card-img-top" alt={oneUser.firstName} />
        <div className="card-body">
          <h5 className="card-title">{oneUser.dateOfBirth}</h5>
          <h5 className="card-title">{oneUser.description}</h5>

          <a href="#" className="btn btn-primary">Добавить в друзья</a>
        </div>
      </div>
    </div>
  );
}
