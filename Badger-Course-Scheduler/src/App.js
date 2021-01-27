import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import CourseArea from './CourseArea';
import Cart from './Cart.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCourses: {},
      AfterFilter: {},
      subjects: [],
      cartCourses: [],
      inCart: false,
      planner: false,
      plannerCourses: {}
    };

    this.CourseAreaCB = this.CourseAreaCB.bind(this);
	this.leftBarCB = this.leftBarCB.bind(this);
  
  
  this.Cart = new Cart();
 

  }

  componentDidMount() {
    fetch('http://mysqlcs639.cs.wisc.edu:53706/api/react/classes').then(
      res => res.json()
    ).then(data => this.setState({allCourses: data, AfterFilter: data, subjects: this.getSubjects(data)}));
  }

  getSubjects(data) {
    let subjects = [];
    subjects.push("All");

    for(const course of Object.values(data)) {
      if(subjects.indexOf(course.subject) === -1)
        subjects.push(course.subject);
    }

    return subjects;
  }

  refresh(courses) {
    this.setState({AfterFilter: courses})
  }

  CourseAreaCB(key, data, section, subsection, whetherDrop) {
	  let tempStore = {};
	  if(!whetherDrop) {
		  tempStore = this.Cart.addCourse(key, data, this.state.cartCourses, section, subsection);
	  } else {
		  tempStore = this.Cart.removeCart(key, data, this.state.cartCourses, section, subsection);
	  }
	  
	  this.setState({
		  cartCourses: tempStore,
	  });
  }

  leftBarCB(cartEnabled) {
	  this.setState({
		  inCart: cartEnabled
	  });
  }
  
  renderArea() {
	  if(this.state.planner === false || this.state.inCart) {
      return <CourseArea data=
      {this.state.AfterFilter} 
      courseListCB={this.CourseAreaCB} 
      inCart={this.state.inCart} 
      checklist={this.state.plannerCourses}/>
	  } else {
	  }
  }

  

  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />


       
    <Sidebar refresh={(courses) => this.refresh(courses)} 
    courses={this.state.allCourses} 
    subjects={this.state.subjects} 
    cart={this.state.cartCourses} 
    leftBarCB={this.leftBarCB} 
    cartCourses={this.state.cartCourses}  
    />
        <div style={{marginLeft: '250px'}}>

			{this.renderArea()}

        </div>
      </>
    )
  
}
}

export default App;
