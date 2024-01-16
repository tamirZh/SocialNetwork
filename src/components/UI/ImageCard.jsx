import React from 'react';

export default function ImageCard({ oneImage }) {
  return (
    <a href={`/api/${oneImage?.id}`}>
      <div className="card" style={{ width: '300px' }}>
        <img src={oneImage.img} className="card-img-top" alt={oneImage.name} />
        <div className="card-body">
          <h5 className="card-title">{oneImage.name}</h5>
        </div>
      </div>
    </a>
  );
}
