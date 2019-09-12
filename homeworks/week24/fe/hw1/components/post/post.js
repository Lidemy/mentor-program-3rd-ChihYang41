import React, { Component } from 'react';
import './post.css';
import PostCard from './PostCard';
import Loading from '../utils/Loading';
import AlertDismissible from '../utils/Alert';

class Posts extends Component {
  constructor() {
    super();
    this.state = {
      isDeleteSuccessfully: null,
      isAddSuccessfully: null,
    };
  }

  componentDidMount() {
    const { getAllPosts } = this.props;
    getAllPosts();
  }

  render() {
    const {
      history,
      allPosts,
      isLoadingGetAllPosts,
      getAllPostsError,
      deletePostError,
      addPostError,
    } = this.props;

    const error = getAllPostsError || deletePostError || addPostError;

    if (isLoadingGetAllPosts) return <Loading />;
    return (
      <div>
        <h2>Posts</h2>
        {error && <AlertDismissible alertTitle="發生錯誤！" alertContent="麻煩重新操作一次。" />}
        <div className="post-list">
          <PostCard posts={allPosts} key={allPosts.id} history={history} />
        </div>
      </div>
    );
  }
}

export default Posts;
