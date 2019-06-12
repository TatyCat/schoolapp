import React, { Component } from 'react';
import './Students.css'

class StudentList extends Component {
  render() {
    return (
      <>
        <table>
          <thead>
            <th>Student ID:</th>
            <th>Name:</th>
            <th>Status:</th>
          </thead>
          <tbody>
            {this.props.studentData.map((student) => {
              return (
                <tr key={student.Id}>
                  <td>{student.Id}</td>
                  <td>{student.Name}</td>
                  <td>{student.IsEnrolled ? "Enrolled" : "Not Enrolled"}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default StudentList;
