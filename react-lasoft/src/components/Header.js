import React from 'react';
import logo from '../images/home.png'
import '../style/header.css'
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Products() {
  return(
      <div className="header">
        <Link to='/'>
          <img src={logo} alt="home" />
        </Link>
        <Link to='/shop'>
          <div className="header-link">
            <p>to the shop</p>
          </div>
        </Link>
      </div>
  )
}
