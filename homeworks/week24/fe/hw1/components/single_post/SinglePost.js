import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './singlePost.css';
import Loading from '../utils/Loading';
import EditItem from './EditItem';
import Markdown from 'react-markdown';
import CodeBlock from "../utils/CodeBlock";
import AlertDismissible from '../utils/Alert'

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      ifEditSuccessfully: null,
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
    const { match, history, isLoadingDeletePost, isLoadingEditPost, getSinglePost } = this.props;

    if (prevProps !== this.props) {
      const { singlePost } = this.props
      this.setState({
        title: singlePost.title,
        body: singlePost.body,
        author: singlePost.author
      })
    }

    if (isLoadingDeletePost !== prevProps.isLoadingDeletePost && !isLoadingDeletePost) {
      history.push('/React-SPA-Blog/posts')
    }

    if (isLoadingEditPost !== prevProps.isLoadingEditPost && !isLoadingEditPost) {
      getSinglePost(match.params.id);
      this.setState({
        ifEditSuccessfully: true
      })
    }
  }

  handleDelete = () => {
    const message = '確定要刪除嗎？';
    const { match, deletePost } = this.props;
    if (window.confirm(message)) {
      deletePost(match.params.id);
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
    const { editPost, singlePost } = this.props;
    editPost(singlePost.id, author, title, body);
    this.setState({
      isEditing: !this.state.isEditing,
      ifEditSuccessfully: null
    })
  }

  render() {
    const { isEditing, title, body, ifEditSuccessfully } = this.state;
    const { singlePost, isLoadingPost, editPostError } = this.props;
    const error = editPostError;
    return (
      <div>
        { ifEditSuccessfully && <AlertDismissible alertTitle={'編輯成功！'} alertContent={'你很棒！文章 bang 不一樣了！'}/> }
        { error && <AlertDismissible alertTitle={'發生錯誤！'} alertContent={'麻煩重新操作一次。'}/> }
        <div className="content">
          {
            isEditing ?
              <Fragment>
                <EditItem className="edit-title" value={title} onChange={this.handleEditTitle} />
                <EditItem className="edit-content" value={body} onChange={this.handleEditContent} />
              </Fragment>
              :
              <Fragment>
                { isLoadingPost ? <Loading /> : <h2>Title：{singlePost.title}</h2>}
                { isLoadingPost ? <Loading /> : <h3>Author：{singlePost.author}</h3>}
                { isLoadingPost ? <Loading /> : <Markdown source={singlePost.body} className="card-content" linkTarget="_blank" renderers={{ code: CodeBlock }}/> }
              </Fragment>
          }
          <div className="btn-container">
            {
              isEditing ?
                <Fragment>
                  <button className="btn btn-warning" onClick={this.handleEditSubmit}>Submit</button>
                </Fragment>
                :
                <Fragment>
                  <button className="btn btn-primary" onClick={this.handleDelete}>Delete</button>
                  <button className="btn btn-warning" onClick={this.handleEditMode}>Edit</button>
                </Fragment>
            }
            <div className="back-btn-container">
              <Link to='/React-SPA-Blog/posts' className="btn btn-info"> Go back </Link>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default SinglePost;
