import React, { Component } from 'react';
import './HeaderSection.css'
import { Link } from 'react-router-dom'


class headerNav extends Component {
  state = {
  }
  newTab = (linkClicked) => {
    console.log(linkClicked)

  }
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to={"/schools"} onClick={() => this.newTab("schools")} className={this.state.activeLink ? 'schools' : ""}>Schools</Link>
          </li>
          <li>
            <Link to="/teachers" onClick={() => this.newTab("teachers")} className={this.state.activeLink ? 'active' : ""}>Teachers</Link>
          </li>
          <li>
            <Link to="/students" onClick={() => this.newTab("students")} className={this.state.activeLink ? 'active' : ""}>Students</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default headerNav;