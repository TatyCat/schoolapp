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
      <article>
        <h1>District Schools</h1>
        <ul className="schoolsList" key={this.props.i + "allSchoolsList"} >
          {
            this.state.schools.map((schoolList, index) => {
              return (
                <li>

                  <Link key={index} to={{
                    pathname: `/schools/${schoolList.Id}`,
                    state: { selectedSchoolData: this.state.schools[index] }
                  }} >
                    [ID: {schoolList.Id}]   {schoolList.Name}
                  </Link>
                </ li>
              )
            })
          }
        </ ul>
      </article>
    );
  }
}

export default AllSchools;
