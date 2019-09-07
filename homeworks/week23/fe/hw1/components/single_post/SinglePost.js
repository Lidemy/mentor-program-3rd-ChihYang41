import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './singlePost.css';
import Loading from './Loading';
import EditItem from './EditItem';

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      title: '',
      body: '',
      author: '',
    }
  }

  componentDidMount() {
    const { match, getSinglePost } = this.props
    getSinglePost(match.params.id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      const { singlePost } = this.props
      this.setState({
        title: singlePost.title,
        body: singlePost.body,
        author: singlePost.author
      })
    }
  }

  handleDelete = () => {
    const message = '確定要刪除嗎？';
    const { match, deletePost, history } = this.props;
    if (window.confirm(message)) {
      deletePost(match.params.id);
      history.push('/React-SPA-Blog/posts')
    } else {
      return null;
    }
  }

  handleEditMode = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    })
  }

  handleEditTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleEditContent = (e) => {
    this.setState({
      body: e.target.value
    })
  }

  handleEditSubmit = () => {
    const { author, title, body } = this.state;
    const { editPost, singlePost, history} = this.props;
    editPost(singlePost.id, author, title, body);
    history.push('/React-SPA-Blog/posts')
  }

  render() {
    const { isEditing, title, body } = this.state;
    const { singlePost, isLoading } = this.props;
    return (
      <div>
        <div className="content">
          {
            isEditing ?
              <Fragment>
                <EditItem className="edit-title" value={title} onChange={this.handleEditTitle} />
                <EditItem className="edit-content" value={body} onChange={this.handleEditContent} />
              </Fragment>
              :
              <Fragment>
                <h2>{isLoading ? <Loading /> : singlePost.title}</h2>
                { isLoading ? <Loading /> : <p className="card-content"> {singlePost.body} </p> }
              </Fragment>
          }
        </div>
        <div className="btn-container">
          {
            isEditing ?
              <Fragment>
                <button className="btn btn-outline-warning" onClick={this.handleEditSubmit}>Submit</button>
              </Fragment>
              :
              <Fragment>
                <button className="btn btn-outline-primary" onClick={this.handleDelete}>Delete</button>
                <button className="btn btn-outline-warning" onClick={this.handleEditMode}>Edit</button>
              </Fragment>
          }
        </div>
        <div className="back-btn-container">
          <Link to='/React-SPA-Blog/posts' className="btn btn-outline-info"> Go back </Link>
        </div>
      </div>
    );
  }
}

export default SinglePost;
