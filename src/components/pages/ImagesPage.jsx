import React from 'react';
import ImageCard from '../UI/ImageCard';

export default function ImagesPage({ myImages }) {
  return (
    <div className="row">
      <h1>ImagesPage</h1>
      { myImages?.map((oneImage) => <ImageCard key={oneImage.id} oneImage={oneImage} />)}
    </div>
  );
}
