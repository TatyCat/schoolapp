import React, { Component } from 'react';
// import SelectedSchool from './pages/SelectedSchoolPG';
import SchoolsTeachersStudents from '../../data/SchoolsTeachersStudents'
import { Link } from 'react-router-dom'


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
        <ul>
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
