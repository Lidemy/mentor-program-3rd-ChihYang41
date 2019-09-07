import React from 'react';

export default function PostCard({ posts, history }) {
  return (
    posts.map(post => (
      <div
        key={post.id}
        className="card text-white bg-dark mb-3"
        onClick={() => {
          history.push(`/React-SPA-Blog/posts/${post.id}`);
        }}
      >
        <div className="card-header">{post.id}</div>
        <div className="card-body">
          <h4 className="card-title">{post.title}</h4>
          <p className="card-text">{post.body}</p>
        </div>
      </div>
    ))
  );
}
