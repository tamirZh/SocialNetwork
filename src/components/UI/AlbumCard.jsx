import React from 'react';

export default function AlbumCard({ oneAlbum, deleteHandler }) {
  return (
    <div className="flex">
      <a href={`/${oneAlbum.id}`}>
        <img src={oneAlbum.img} className="card-img-top" alt={oneAlbum.name} />
      </a>
      <div className="card-body">
        <h5 className="card-title">{oneAlbum.name}</h5>
        <h5 className="card-title">{oneAlbum.description}</h5>
        <button type="button" onClick={() => deleteHandler(oneAlbum.id)}>Удалить</button>
      </div>
    </div>
  );
}
