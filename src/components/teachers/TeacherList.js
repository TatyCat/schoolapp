import React, { Component } from 'react';

class TeacherList extends Component {
  render() {
    return (
      <ul className="teacherList" key={this.props.i + 'teachers'}>
        <li>{this.props.teacherData[0].Name}
          <span> <br />  </span> [ID: {this.props.teacherData[0].Id}]
        </li>
      </ul>
    );
  }
}

export default TeacherList;
