import React, { Component } from 'react';
import './post.css';

function Card(props) {
  const { posts, onClick } = props;
  return (
    posts.map(post => {
      return (
        <div key={post.id} className="card text-white bg-dark mb-3" onClick={() => onClick(post.id)}>
          <div className="card-header">{post.id}</div>
          <div className="card-body">
            <h4 className="card-title">{post.title}</h4>
            <p className="card-text">{post.body}</p>
          </div>
        </div>
      )
    }))
}

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      singlePostId: null,
      singlePost: {},
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({
        posts: data
      }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.singlePostId !== this.state.singlePostId && this.state.singlePostId !== null) {
      this.getSinglePost()
    }
  }

  goBack = () => {
    this.setState({
      singlePostId: null,
      singlePost: {},
    })
  }

  setId = (id) => {
    this.setState({
      singlePostId: id
    })
  }

  getSinglePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/' + this.state.singlePostId)
      .then(res => res.json())
      .then(data => this.setState({
        singlePost: data
      }))
  }

  render() {
    const { posts, singlePostId, singlePost } = this.state;
    return (
      <div>
        <h2>Posts</h2>
        <div className="post-list">
            {
              !singlePostId &&
              <Card posts={posts} onClick={this.setId} key={posts.id}/>
            }
            {
              singlePostId &&
              <div>
                <h2>{singlePost.title}</h2>
                <p className="card-text">{singlePost.body}</p>
              </div>
            }
            {
              singlePostId &&
              <div>
                <button type="button" className="btn btn-outline-secondary" onClick={this.goBack}>Go back</button>
              </div>
            }
        </div>
      </div>
    );
  }
}

export default Post;