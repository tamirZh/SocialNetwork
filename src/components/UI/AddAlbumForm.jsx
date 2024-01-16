import React from 'react';

export default function AddAlbumForm(handleSubmit) {
  return (
    <div className="container mx-auto px-4 border-solid border-2">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="border-solid border-2">Name</label>
          <input name="name" type="text" className="border-solid  border-2" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail2" className="form-label">Url image</label>
          <input name="img" type="text" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail3" className="form-label">Description</label>
          <input name="description" type="text" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
