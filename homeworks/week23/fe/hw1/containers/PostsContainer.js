import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Posts from '../components/post/post';
import { getAllPosts } from '../action';

const PostsContainer = props => (<Posts {...props} />);

const mapStateToProps = state => ({
  allPosts: state.AllPostsReducer.allPosts,
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => {
    dispatch(getAllPosts());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsContainer));
