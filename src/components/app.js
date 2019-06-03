import React, { Component } from 'react';
import CourseLibrary from './courselibrary';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Course Library</h1>
        <CourseLibrary />
      </div>
    );
  }
}
