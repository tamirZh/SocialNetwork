import React from 'react';

export default function AlbumCard({ oneAlbum }) {
  return (
    <a href={`/${oneAlbum.id}`}>
      <div className="card" style={{ width: '200px' }}>
        <img src={oneAlbum.img} className="card-img-top" style={{ width: '200px' }} alt={oneAlbum.name} />
        <div className="card-body">
          <h5 className="card-title">{oneAlbum.name}</h5>
          <h5 className="card-title">{oneAlbum.description}</h5>
        </div>
      </div>
    </a>
  );
}
