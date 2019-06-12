import React, { Component } from 'react';
import Header from '../components/header/Header'
import HeaderNav from '../components/header/HeaderNav'
import SchoolsTeachersStudents from '../data/SchoolsTeachersStudents'
import StudentList from '../components/students/StudentList';


class StudentsPg extends Component {
  state = {
    studentData: []
  }

  componentDidMount() {
    this.createStudentDataArray()
  }

  createStudentDataArray = () => {
    let studentDataArray = []

    SchoolsTeachersStudents["Schools"].forEach((school) => {
      school.Teachers.forEach((teacher) => {
        teacher.Students.forEach((student) => {
          studentDataArray.push(student)
        })
      })
    })

    this.setState({ studentData: studentDataArray })
  }
  render() {
    return (
      <>
        <Header />
        <HeaderNav tabClicked={this.props.match.path} />

        <article>
          <h1>District Students</h1>
          <StudentList studentData={this.state.studentData} />
        </article>
      </>
    );
  }
}

export default StudentsPg;
