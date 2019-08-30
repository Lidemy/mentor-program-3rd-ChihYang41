import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './post.css';

function Card(props) {
  const { posts, history } = props;
  return (
    posts.map(post => (
      <div
        key={post.id}
        className="card text-white bg-dark mb-3"
        onClick={() => {
          history.push(`/posts/${post.id}`);
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

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get('https://qootest.com/posts')
      .then((res) => {
        this.setState({
          posts: res.data,
        });
      });
  }

  render() {
    const { posts } = this.state;
    const { history } = this.props;
    return (
      <div>
        <h2>Posts</h2>
        <div className="post-list">
          <Card posts={posts} key={posts.id} history={history} />
        </div>
      </div>
    );
  }
}

export default withRouter(Posts);
