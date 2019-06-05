import React, { Component } from 'react';
import Header from '../components/header/Header'
import HeaderNav from '../components/header/HeaderNav'
import SchoolsTeachersStudents from '../data/SchoolsTeachersStudents'


class TeachersPg extends Component {
  state = {
    schools: []
  }

  componentDidMount() {
    this.setState({ schools: SchoolsTeachersStudents["Schools"] })
  }

  render() {
    return (
      <>
        <Header />
        <HeaderNav />
        <h1>Teachers:</h1>
        {this.state.schools.map((schoolList, i) => {
          return (
            <ul key={i}>
              {/* {console.log(schoolList.Teachers[i].Id)} */}
              {/* <li key={i + "ID"}>{schoolList.Teachers[i]}</li> */}
              {/* <li key={i + "Name"}>{schoolList.Teachers[i]["Name"]}</li> */}
            </ul>
          )
        })}
      </>
    );
  }
}

export default TeachersPg;