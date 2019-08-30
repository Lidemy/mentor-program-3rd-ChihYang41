import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './post.css';
import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singlePost: {},
    };
  }

  componentDidMount() {
    const postId = this.props.match.params.id;
    axios.get(`https://qootest.com/posts/${postId}`)
      .then((res) => {
        this.setState({
          singlePost: res.data,
        });
      });
  }

  render() {
    const { singlePost } = this.state;
    return (
      <div>
        <div className="content">
          <h2>{!singlePost.title ? <Loading /> : singlePost.title}</h2>
          <p className="card-content">{singlePost.body}</p>
        </div>
        <div>
          <Link to="/posts" className="btn btn-outline-secondary"> Go back </Link>
        </div>
      </div>
    );
  }
}

export default Posts;
