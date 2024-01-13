import React from 'react';

export default function OneImagePage({ imgById }) {
    console.log(imgById);
  return (
    <>
      <div className="card mb-3">
        <img src={imgById.img} className="card-img-top" alt={imgById.name} />
        <div className="card-body">
          <h5 className="card-title">{imgById.name}</h5>
        </div>
      </div>
      <section style={{ backgroundColor: '#fff' }}>
        <div className="container my-5 py-5 text-dark">
          <div className="row d-flex justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-6">
              <div className="card">
                <div className="card-body p-4">
                  <div className="d-flex flex-start w-100">
                    <img
                      className="rounded-circle shadow-1-strong me-3"
                      src={user.img}
                      alt="avatar"
                      width="65"
                      height="65"
                    />
                    <div className="w-100">
                      <h5>Добавить комментарий</h5>
                      <form onSubmit={handleClickComment}>
                        <div className="form-outline">
                          <textarea
                            name="comment"
                            className="form-control"
                            id="textAreaExample"
                            rows="4"
                          ></textarea>
                          <label className="form-label" htmlFor="textAreaExample">
                            Что думаете?
                          </label>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                          <button type="submit" className="btn btn-danger">
                            Отправить <i className="fas fa-long-arrow-alt-right ms-1"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row d-flex justify-content-center">
        <div className="col-md-8 col-lg-6">
          {commentState.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </>
  );
}
