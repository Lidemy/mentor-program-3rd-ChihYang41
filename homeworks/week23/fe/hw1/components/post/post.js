import React, { Component } from 'react';
import './post.css';
import PostCard from './PostCard';

class Posts extends Component {
  componentDidMount() {
    const { getAllPosts } = this.props;
    getAllPosts();
  }

  render() {
    const { history, allPosts } = this.props;
    return (
      <div>
        <h2>Posts</h2>
        <div className="post-list">
          <PostCard posts={allPosts} key={allPosts.id} history={history} />
        </div>
      </div>
    );
  }
}

export default Posts;
