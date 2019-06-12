import React, { Component } from 'react';
import './HeaderSection.css'
import { Link } from 'react-router-dom'


class headerNav extends Component {
  componentWillMount() {
    this.setState({ activeTab: this.props.tabClicked })
  }

  state = {
    activeTab: "",
  }

  render() {
    return (
      < nav >
        <ul>
          <li>
            <Link to={"/schools"} className={this.state.activeTab === '/schools' || this.state.activeTab === '/schools/:school' ? 'active' : ""}>Schools</Link>
          </li>
          <li>
            <Link to="/teachers" className={this.state.activeTab === '/teachers' ? 'active' : ""}>Teachers</Link>
          </li>
          <li>
            <Link to="/students" className={this.state.activeTab === '/students' ? 'active' : ""}>Students</Link>
          </li>
        </ul>
      </nav >
    );
  }
}

export default headerNav;