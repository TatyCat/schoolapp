import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SchoolsHomePg from './pages/SchoolsHomePg'
import SelectedSchool from './pages/SelectedSchoolPG';
import TeachersPg from './pages/TeachersPg'
import StudentsPg from './pages/StudentsPg';


class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={SchoolsHomePg} />
            <Route path="/schools" exact component={SchoolsHomePg} />
            <Route path="/schools/:school" component={SelectedSchool} />
            <Route path="/teachers" exact component={TeachersPg} />
            <Route path="/students" exact component={StudentsPg} />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
