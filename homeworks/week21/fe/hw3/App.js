import React, { Component } from 'react';
import './bootstrap.min.css'
import './App.css';
import Nav from './nav/nav.js';
import About from './about/about.js';
import Home from './home/home.js';
import Post from './post/post.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: 'Home',
    }
  }

  handleActive = (page) => {
    this.setState({
      isFocus: page
    })
  }
  render() {
    const { isFocus } = this.state;
    return (
      <div className="App">
        <Nav handleActive={this.handleActive}/>
        <div className="main-page">
          {isFocus === 'Home' && <Home />}
          {isFocus === 'Posts' && <Post />}
          {isFocus === 'About' && <About />}
        </div>
      </div>
    );
  }

}

export default App;