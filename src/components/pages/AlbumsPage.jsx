import React, { useState } from 'react';
import AlbumCard from '../UI/AlbumCard';
import AddAlbumForm from '../UI/AddAlbumForm';

export default function AlbumsPage({ allAlbums }) {
  const [currentAlbums, setCurrentAlbums] = useState(allAlbums);

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

  const deleteHandler = async (albumId) => {
    const response = await fetch(`/api/${albumId}`, { method: 'DELETE' });
    if (response.status === 200) {
      setCurrentAlbums((prev) => prev.filter((el) => el.id !== albumId));
    } else if (response.status === 500) {
      const message = await response.json();
    }
  };
  return (
    <>
      <AddAlbumForm handleSubmit={handleSubmit} />
      <div>
        <h1>AlbumPage</h1>
        { currentAlbums?.map((oneAlbum) => (
          <AlbumCard
            key={oneAlbum.id}
            oneAlbum={oneAlbum}
            deleteHandler={deleteHandler}
          />
        ))}
      </div>
    </>
  );
}
