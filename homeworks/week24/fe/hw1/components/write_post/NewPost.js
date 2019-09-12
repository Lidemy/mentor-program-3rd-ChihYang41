import React, { Component } from 'react';
import './NewPost.css';
import Loading from '../utils/Loading'

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author: ''
    }
  }

  componentDidUpdate(prevProps) {
    const { history, isLoadingAddPost} = this.props
    if (isLoadingAddPost !== prevProps.isLoadingAddPost && !isLoadingAddPost) {
      history.push('/React-SPA-Blog/posts')
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
    const { addPost } = this.props;
    const { author, title, body } = this.state
    addPost(author, title, body);
    this.setState({
      title: '',
      body: '',
      author: ''
    })
  }

  render() {
    const { title, body, author } = this.state;
    const {isLoadingAddPost} = this.props;
    if (isLoadingAddPost) return <Loading />
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