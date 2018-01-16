import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Matnavbar.css'

class Matnavbar extends Component {
  render() {
    return (
      <div>
        <nav className="black darken-3">
          <div className="nav-wrapper container">
            <Link className="flow-text" to="/">cdanmar</Link>
            <a href="#" data-activates="dropdown1" className="button-collapse">
              <i className="fa fa-bars"></i></a>
            <ul className="right hide-on-med-and-down">
              <li>
               <NavLink exact activeClassName="active" activeStyle={{color: 'red'}} to="/">Home</NavLink>
              </li>
              <li>
               <NavLink activeStyle={{color: 'red'}} to="/about">About</NavLink>
              </li>
              <li>
               <NavLink activeStyle={{color: 'red'}} to="/contact">Contact</NavLink>
              </li>
            </ul>
              <ul className="side-nav" id="dropdown1">
              <li>
                <NavLink exact activeClassName="active" activeStyle={{ color: 'red' }} to="/">Home</NavLink>
              </li>
              <li>
                <NavLink activeStyle={{ color: 'red' }} to="/about">About</NavLink>
              </li>
              <li>
                <NavLink activeStyle={{ color: 'red' }} to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Matnavbar;
