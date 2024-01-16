import React, { useState } from 'react';
import ImageCard from '../UI/ImageCard';
import AddImageForm from '../UI/AddImageForm';

export default function ImagesPage({ myImages }) {
  const [curMyImages, setCurMyImages] = useState(myImages);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/image/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
    });
    if (response.status === 200) {
      window.location.href = '/images';
    }
  };

  const deleteHandler = async (albumId) => {
    const response = await fetch(`/api/album/${albumId}`, { method: 'DELETE' });
    console.log(response, '-----------<<<<<<>>>>>>');
    if (response.status === 200) {
        setCurMyImages((prev) => prev.filter((el) => el.id !== albumId));
    } else if (response.status === 500) {
      const message = await response.json();
    }
  };
  return (
    <>
      <AddImageForm handleSubmit={handleSubmit} />
      <div className="row">
        <h1>ImagesPage</h1>
        { curMyImages?.map((oneImage) => <ImageCard key={oneImage.id} oneImage={oneImage} />)}
      </div>
    </>
  );
}
