
import React from 'react';
import './App.css';
import Course from './Course';

class CourseArea extends React.Component {
  
  
  
  getCourses() {
    let courses = [];
	
	//store all keys and course numbers in separate arrays. Can be paired by index number.
	let keys = [];
	let nums = [];
	for(const initCourse of Object.entries(this.props.data)) {
		keys.push(initCourse[0]);
		nums.push(initCourse[1].number);
	}
	
    for(const course of Object.entries(this.props.data)) {
      courses.push (
	    <Course key={course[0]} uniqueK={course[0]} data={course[1]} allKeys={keys} allNums={nums} courseListCB={this.props.courseListCB} inCart={this.props.inCart} checklist={this.props.checklist[course[0]]}/>
      )
    }
	
	if(courses.length === 0) {
		return "No matching class.....Please try again";
	}
	
    return courses;
  }

  render() {
    return (
      <div style={{margin: '5px'}}>
        {this.getCourses()}
      </div>
    )
  }
}

export default CourseArea;




