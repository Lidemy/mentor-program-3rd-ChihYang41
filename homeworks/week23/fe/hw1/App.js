import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './bootstrap.min.css';
import './App.css';
import BlogNavbar from './components/nav/nav.js';
import NewPostContainer from './containers/NewPostContainer.js';
import Home from './components/home/home.js';
import PostsContainer from './containers/PostsContainer.js';
import SinglePostContainer from './containers/SinglePostContainer.js';

function App() {
  return (
    <Router>
      <div className="App">
        <BlogNavbar />
        <div className="main-page">
          <Route exact path="/React-SPA-Blog/" component={Home} />
          <Route exact path="/React-SPA-Blog/posts" component={PostsContainer} />
          <Route path="/React-SPA-Blog/NewPost" component={NewPostContainer} />
          <Route path="/React-SPA-Blog/posts/:id" component={SinglePostContainer} />
        </div>
      </div>
    </Router>
  );
}

export default App;
