import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
        <div className="navigation d-flex justify-content-between mx-auto mt-4">
            <Link to='/' className="nav_links">Home</Link>
            <Link to='#' className="nav_links">About</Link>
            <Link to='/create' className="nav_links">Add A New Product</Link>
            <Link to='#' className="nav_links">Contact</Link>
        </div>
    </>
  )
}

export default Nav