import React, { Component } from 'react';
import './HeaderSection.css'
import { Link } from 'react-router-dom'


class headerNav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to={"/schools"}>Schools</Link>
          </li>
          <li>
            <Link to="/teachers">Teachers</Link>
          </li>
          <li>
            <Link to="/students">Students</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default headerNav;