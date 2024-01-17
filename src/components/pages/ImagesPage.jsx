import React, { useState } from 'react';
import ImageCard from '../UI/ImageCard';
import AddImageForm from '../UI/AddImageForm';

export default function ImagesPage({ myImages }) {
    console.log(myImages, '-------------->>>>>>>>>>>>>');
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

  const deleteHandler = async (imageId) => {
    const response = await fetch(`/api/image/${imageId}`, { method: 'DELETE' });
    if (response.status === 200) {
      setCurMyImages((prev) => prev.filter((el) => el.id !== imageId));
    } else if (response.status === 500) {
      const message = await response.json();
    }
  };
  return (
    <div className="container mx-auto px-4">
      {/* <AddImageForm handleSubmit={handleSubmit} /> */}
      <h1>ImagesPage</h1>
      <div className="grid grid-cols-4 gap-4 text-center">
        { curMyImages?.map((oneImage) => <ImageCard key={oneImage.id} oneImage={oneImage} deleteHandler={deleteHandler} />)}
      </div>
    </div>
  );
}
