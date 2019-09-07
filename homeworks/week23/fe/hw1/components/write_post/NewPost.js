import React, { Component } from 'react';
import './NewPost.css';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author: ''
    }
  }

  handleChangeAuthor = (e) => {
    this.setState({
      author: e.target.value
    })
  }

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleChangeContent = (e) => {
    this.setState({
      body: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { createPost, history } = this.props;
    const { author, title, body } = this.state
    createPost(author, title, body);
    this.setState({
      title: '',
      body: '',
      author: ''
    })
    history.push('/React-SPA-Blog/posts')
  }

  render() {
    const { title, body, author } = this.state
    console.log(this.state)
    return (
      <div>
        <h2>Write a Post</h2>
         <div className="new-post-author">
          <label>作者：</label>
          <textarea onChange={this.handleChangeAuthor} value={author}></textarea>
        </div>
        <div className="new-post-title">
          <label>標題：</label>
          <textarea onChange={this.handleChangeTitle} value={title}></textarea>
        </div>
        <div className="new-post-content">
          <label>內文：</label>
          <textarea onChange={this.handleChangeContent} value={body}></textarea>
        </div>
        <button type="submit" className="btn btn-outline-info" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default NewPost;