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
        <HeaderNav />
        <section>
          <h1>{this.state.Name} <span>ID: [{this.state.Id}]</span></h1>
          <p>{this.state.Description}</p>
          <p>{this.state.IsOpen ? "Available for Enrollment" : "NOT Available for Enrollment"}</p>
        </section>

        <section>
          <h2>Teachers:</h2>

          {this.state.Teachers.map((teacher, i) => {
            return (
              <ul key={i + "list"}>
                <li key={i + "classroom"}>
                  <p className="teacher">
                    {teacher.Name} - ID: [{teacher.Id}]
                </p>
                </li>
                <li>
                  <table>
                    <thead><tr key={i + "studentList"}>{teacher.Name}'s Students:</tr></thead>
                    <tbody>
                      {teacher.Students.map((student, i) => {
                        return (
                          <tr key={i}><th>ID:</th>
                            <td>{student.Id}</td>
                            <th>Name:</th>
                            <td>{student.Name}</td>
                            <th>Status:</th>
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
// key={i+"student"}

export default SelectedSchool;