import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NewPost from '../components/write_post/NewPost';
import { createPost } from '../action';

const NewPostContainer = props => (<NewPost {...props} />);

const mapDispatchToProps = dispatch => ({
  createPost: (author, title, body) => {
    dispatch(createPost(author, title, body));
  },
});

export default withRouter(connect(null, mapDispatchToProps)(NewPostContainer));
