import React from 'react';
import AlbumCard from '../UI/AlbumCard';
import AddAlbumForm from '../UI/AddAlbumForm';

export default function AlbumsPage({ allAlbums }) {
  return (
    <>
      <AddAlbumForm />
      <div>
        <h1>AlbumPage</h1>
        { allAlbums?.map((oneAlbum) => <AlbumCard key={oneAlbum.id} oneAlbum={oneAlbum} />)}
      </div>
    </>
  );
}
