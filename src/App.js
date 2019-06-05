import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SchoolsHomePg from './pages/SchoolsHomePg'
import SelectedSchool from './pages/SelectedSchoolPG';


class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={SchoolsHomePg} />
            <Route path="/schools" exact component={SchoolsHomePg} />
            <Route path="/schools/:school" component={SelectedSchool} />

            {/* <Route
              path="/:tummyTreat/:treatyMcTreatFace"
              exact
              component={Pastry} */}
            {/* /> */}
            {/* <Route path="/pies/pumpkin" exact component={Pumpkin} /> */}
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
