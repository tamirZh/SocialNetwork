import React from 'react';

export default function ImageCard({ oneImage, deleteHandler }) {
  return (
    <div className="container">
      <a href={`/api/${oneImage?.id}`}>
        <img src={oneImage.img} className="card-img-top" alt={oneImage.name} />
      </a>
      <div className="card-body">
        <h5 className="card-title">{oneImage.name}</h5>
        <button type="button" onClick={() => deleteHandler(oneImage.id)}>Удалить</button>
      </div>
    </div>
  );
}
