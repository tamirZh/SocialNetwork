import React from 'react';

export default function CommentCard({ comment }) {
  return comment ? (
    <div className="card shadow-0 border" style={{ backgroundColor: '#fff' }}>
      <div className="card-body p-4">
        <div className="card mb-4">
          <div className="card-body">
            <p>{comment.text}</p>

            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <img src={comment.User.img} alt="avatar" width="25" height="25" />
                <p className="small mb-0 ms-2">{comment.User.name}</p>
              </div>
              <div className="d-flex flex-row align-items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
