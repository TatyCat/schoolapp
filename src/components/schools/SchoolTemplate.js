import React, { Component } from 'react';
import HeaderNav from '../header/HeaderNav';
import Header from '../header/Header';

class SchoolTemplate extends Component {
  rendr = () => {
    console.log(this.props.history.location.state.selectedSchoolData)
  }


  render() {
    return (
      <>
        <Header />
        <HeaderNav />
        <h1>{this.rendr}</h1>
        {/* <h1>{console.log(this.props.history.location.state.selectedSchoolData.map((a) => { return a.}))}</h1> */}
        <p>Descfriotion</p>
        <h2>Teachers:</h2>
        <h3>Mrs. Jones</h3>
        <h3>Mrs. Caf</h3>
        {/* {console.log(this.props.history.location.state.selectedSchoolData[0]["Id"])} */}

        {/* {console.log(this.props.match.params.school)} */}
        <h1>HotC</h1>
      </>
    );
  }
}

export default SchoolTemplate;