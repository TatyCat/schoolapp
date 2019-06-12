import React, { Component } from 'react';
import Header from '../components/header/Header'
import HeaderNav from '../components/header/HeaderNav'
import AllSchools from '../components/schools/AllSchools'

class Schools extends Component {
  render() {
    return (
      <>
        <Header />
        <HeaderNav tabClicked={this.props.match.path} />
        <AllSchools />
      </>
    );
  }
}

export default Schools;