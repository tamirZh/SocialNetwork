import React from 'react';
import AlbumCard from '../UI/AlbumCard';
import AddAlbumForm from '../UI/AddAlbumForm';

export default function AlbumsPage({ allAlbums }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/album/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.status === 200) {
      window.location.href = '/albums';
    }
  };
  return (
    <>
      <AddAlbumForm handleSubmit={handleSubmit} />
      <div>
        <h1>AlbumPage</h1>
        { allAlbums?.map((oneAlbum) => (
          <AlbumCard
            key={oneAlbum.id}
            oneAlbum={oneAlbum}
          />
        ))}
      </div>
    </>
  );
}
