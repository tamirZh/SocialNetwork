import React from 'react';

export default function UserCard({ oneUser }) {
  return (
    <div style={{ display: 'flex', }}>
      <div className="card" style={{ width: '200px' }}>
        <img src={oneUser.image} className="card-img-top" style={{ width: '200px' }} alt={oneUser.firstName} />
        <div className="card-body">
          <h5 className="card-title">
            {oneUser.firstName}
            {' '}
            {oneUser.secondName}
          </h5>
          <h5 className="card-title">{oneUser.dateOfBirth}</h5>
          <h5 className="card-title">{oneUser.description}</h5>

          <a href="#" className="btn btn-primary">Добавить в друзья</a>
        </div>
      </div>
    </div>
  );
}
