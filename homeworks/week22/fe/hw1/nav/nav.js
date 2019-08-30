import React from 'react';
import { Link, Route } from 'react-router-dom';
import './nav.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Title() {
  return (
    <Link className="navbar-brand" to="/">Blog</Link>
  );
}

function Item(props) {
  const { text, exact, to } = props;
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => (
        <li className={match ? 'active' : ''}>
          {match ? '> ' : ''}
          <Link to={to}>{text}</Link>
        </li>
      )}
    />
  );
}

function BlogNavbar() {
  return (
    <Navbar bg="dark" expand="lg">
      <Title />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Item text="Home" to="/" exact>Home</Item>
          <Item text="Posts" to="/posts">Posts</Item>
          <Item text="About" to="/about">About</Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BlogNavbar;
