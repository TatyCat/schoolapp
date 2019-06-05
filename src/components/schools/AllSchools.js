import React, { Component } from 'react';
import SchoolsTeachersStudents from '../../data/SchoolsTeachersStudents'
import { Link } from 'react-router-dom'
import './Schools.css'

class AllSchools extends Component {
  state = {
    schools: []
  }

  componentDidMount() {
    this.setState({ schools: SchoolsTeachersStudents["Schools"] })
  }

  render() {
    return (
      <>
        <ul className="schoolsList">
          {this.state.schools.map((schoolList, index) => {
            return (
              <li key={index}>
                <Link to={{
                  pathname: `/schools/${schoolList.Id}`,
                  state: { selectedSchoolData: this.state.schools[index] }
                }} >
                  [ID: {schoolList.Id}]   {schoolList.Name}
                </Link>
              </li>
            )
          }
          )}
        </ul>
      </>
    );
  }
}

export default AllSchools;
