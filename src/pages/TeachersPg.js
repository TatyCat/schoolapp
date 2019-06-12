import React, { Component } from 'react';
import Header from '../components/header/Header'
import HeaderNav from '../components/header/HeaderNav'
import SchoolsTeachersStudents from '../data/SchoolsTeachersStudents'
import '../components/teachers/Teachers.css'
import TeacherList from '../components/teachers/TeacherList';


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
        <HeaderNav tabClicked={this.props.match.path} />
        <article>
          <h1>District Teachers</h1>
          {this.state.schools.map((schoolList, index) => {
            return <TeacherList teacherData={schoolList.Teachers} school={schoolList.Name} i={index} key={index} />
          })}
        </article>
      </>
    );
  }
}

export default TeachersPg;