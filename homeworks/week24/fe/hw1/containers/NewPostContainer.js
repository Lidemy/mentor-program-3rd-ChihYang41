import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewPost from '../components/write_post/NewPost';
import { addPost } from '../action';

const NewPostContainer = props => (<NewPost {...props} />);

const mapStateToProps = state => ({
  isLoadingAddPost: state.allPostsReducer.isLoadingAddPost,
});

const mapDispatchToProps = dispatch => ({
  addPost: (author, title, body) => {
    dispatch(addPost(author, title, body));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPostContainer));
