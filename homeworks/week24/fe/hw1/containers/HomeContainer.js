import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Home from '../components/home/home';
import { getLatestPosts } from '../action';

const HomeContainer = props => (<Home {...props} />);

const mapStateToProps = state => ({
  latestTenPosts: state.latestPostsReducer.latestTenPosts,
  isLoadingGetLatestPosts: state.latestPostsReducer.isLoadingGetLatestPosts,
});

const mapDispatchToProps = dispatch => ({
  getLatestPosts: () => {
    dispatch(getLatestPosts());
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));
