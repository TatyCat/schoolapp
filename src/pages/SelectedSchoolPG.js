import React, { Component } from 'react';
import Header from '../components/header/Header'
import HeaderNav from '../components/header/HeaderNav'
import '../components/schools/Schools.css'


class SelectedSchool extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.location.state.selectedSchoolData
  }

  render() {
    return (
      <main className="selectedSchool">
        <Header />
        <HeaderNav tabClicked={this.props.match.path} />
        <section>
          <h1>{this.state.Name} <span>[ID: {this.state.Id}]</span></h1>
          <p>{this.state.Description}</p>
          <p>{this.state.IsOpen ? "Accepting Enrollment" : "NOT Accepting Enrollment"}</p>
        </section>

        <section>
          {this.state.Teachers.map((teacher, i) => {
            return (
              <ul key={i + "list"}>
                <li>
                  <table>
                    <thead>
                      <tr key={i + "studentList"}>
                        <th>{teacher.Name}'s Students:</th>
                      </tr>
                      <tr>
                        <th>Student ID:</th>
                        <th>Name:</th>
                        <th>Status:</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teacher.Students.map((student, i) => {
                        return (
                          <tr key={i}>
                            <td>[{student.Id}]</td>
                            <td>{student.Name}</td>
                            <td>{student.IsEnrolled ? "Enrolled" : "Not Enrolled"}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </li>
              </ul>
            )
          })}
        </section>
      </main>
    );
  }
}

export default SelectedSchool;