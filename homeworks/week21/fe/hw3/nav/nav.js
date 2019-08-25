import React, { Component } from 'react';
import './nav.css';

function Title() {
  return (
    <a className="navbar-brand" href="#">Blog</a>
  );
}

function Item(props) {
  const { text, onClick } = props;
  return (
    <li className="nav-item" onClick={onClick}>
      <a className="nav-link" href="#">{text}</a>
    </li>
  );
}

class Nav extends Component {
  render() {
    const { handleActive } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Title />
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            <Item text="Home" onClick={() => handleActive('Home')} />
            <Item text="Posts" onClick={() => handleActive('Posts')} />
            <Item text="About" onClick={() => handleActive('About')} />
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
