import React from 'react';
import { Link } from 'react-router-dom';

export default function NavTitle(props) {
  return (
    <Link className="navbar-brand" to="/React-SPA-Blog/">Blog</Link>
  );
}
