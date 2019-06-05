import React, { Component } from 'react';
import Header from '../components/header/Header'
import HeaderNav from '../components/header/HeaderNav'
import SchoolsTeachersStudents from '../data/SchoolsTeachersStudents'

class StudentsPg extends Component {
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

      </>
    );
  }
}

export default StudentsPg;
