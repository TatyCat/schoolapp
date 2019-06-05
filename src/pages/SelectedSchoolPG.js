import React, { Component } from 'react';
import Header from '../components/header/Header'
import HeaderNav from '../components/header/HeaderNav'

// http://localhost:3000/schools/nhjg75

class SelectedSchool extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.location.state.selectedSchoolData
  }
  render() {
    return (
      <>
        <Header />
        <HeaderNav />
        <h1>{this.state.Name} <span>ID: [{this.state.Id}]</span></h1>
        <p>{this.state.Description}</p>
        <p>{this.state.IsOpen ? "Available for Enrollment" : "NOT Available for Enrollment"}</p>
        <h2>Teachers:</h2>

        <section>
          {this.state.Teachers.map((teacher, i) => {
            return (
              <ul>
                <li key={i + "classroom"}>
                  <p>
                    {teacher.Name}
                    <br />
                    ID: [{teacher.Id}]
                </p>
                </li>
                <li>
                  <table>
                    <tr><th>Students:</th></tr>
                    <tr>
                      <td>{}Si</td>
                    </tr>
                  </table>
                </li>
              </ul>
            )
          })}
        </section>
      </>
    );
  }
}

export default SelectedSchool;