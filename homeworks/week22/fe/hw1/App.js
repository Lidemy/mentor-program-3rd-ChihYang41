import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './bootstrap.min.css';
import './App.css';
import BlogNavbar from './nav/nav.js';
import About from './about/about.js';
import Home from './home/home.js';
import Posts from './post/post.js';
import SinglePost from './single_post/SinglePost.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <BlogNavbar />
          <div className="main-page">
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={Posts} />
            <Route path="/about" component={About} />
            <Route path="/posts/:id" component={SinglePost} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
