import React from 'react';
import './App.css';

import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import Accordion from 'react-bootstrap/Accordion';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge'

import AddToCart from './AddToChart.js';


class Course extends React.Component {
  

  constructor(props) {
		super(props);
		this.state = {
			show: false,
		};
  }

  

  addCourse = () =>{
    console.log("Add Cart Clicked");
    this.props.setCartCourses(this.props.data);
    var nodes = document.getElementById(this.props.data.name+this.props.where).getElementsByClassName('btn btn-outline-primary');
    for(var i = 0; i < nodes.length; i++){
        nodes[i].disabled = true;
    }
  }

  handleShow() {
	  this.setState(prevState => ({
		  show: !prevState.show
	  }));
  }

  myRequisites() {
    let req = this.props.data.requisites;
    let size = req.length;

    if(size == 0 ){
      var val = "None"
      return val
    }

    else{
      let newReq = []

      var i = 0
      let eachSize = req[size-1].length

      for (i=0; i<size; i++) {
        var reqs = req[i];
        
        var joined = reqs.join(" OR ");
        
        newReq.push(joined);
      }
      var total = newReq;
      var totalJoin = total.join(" AND ")
      
      var h = "(" + totalJoin +")"
      return h
    }
  }

  kwAnnotate() {
    let kw = this.props.data.keywords;

    var joined = kw.join(",  ");

    return joined;
  }

  sectionInformation() {	  

	  if(this.props.data.sections === undefined) {
		  return 0;
	  }
    
	  const sectionInfo = Object.keys(this.props.data.sections).map(key =>
    <tr>
		<td>
      {this.props.data.sections[key].number}
    <br/>
    
</td>

<td><AddToCart 
courseListCB={this.props.courseListCB} 
inCart={this.props.inCart} 
checklist={this.props.checklist}
    uniqueK={this.props.uniqueK} 
    data={this.props.data} 
    sec={key} 
    sub="0" 
    type="section" 
    />
    </td>

    <td>{this.subInformation(this.props.data.sections[key].subsections, {key})}</td>

    <td>{this.timeRetriver(this.props.data.sections[key].time)}</td>

		<td>{this.props.data.sections[key].instructor}</td>

		<td>{this.props.data.sections[key].location}</td>

		

		</tr>
	  )
	  
	  return sectionInfo;
  }

  timeRetriver(timeObject) {
    let times = [];
    console.log(timeObject);
    
	  for(const [day, hour] of Object.entries(timeObject)) {
		  times.push(<div><b>{day}:</b><br/>{hour}<br/></div>);
	  }
	  return times;
  }

  subInformation(classItem, secKey) {


		  const subSecs = Object.keys(classItem).map(key =>
      
      <Accordion>
				<Card bg="info" text="white">
				
				<Accordion.Toggle as={Card.Header} eventKey="0">
					{classItem[key].number}
				</Accordion.Toggle>


        <AddToCart 
        inCart={this.props.inCart} 
        checklist={this.props.checklist}
        uniqueK={this.props.uniqueK} 
        data={this.props.data} 
        sec={secKey} sub={key} 
        type="subsection" 
        courseListCB={this.props.courseListCB} 
        />


				<Accordion.Collapse eventKey="0">
					<Card.Body>

						<Table striped bordered hover size="sm" variant="dark">
							<thead>
                <tr>
								<th>
                  Subsection Location
                  </th>
                  <th>
                    Subsection Time
                  </th>

							</tr>
              </thead>
							<tbody>
                <tr>

								<td>
                  {classItem[key].location}
                  </td>

								<td>
                  {this.timeRetriver(classItem[key].time)}
                  </td>
							</tr>
              </tbody>

						</Table>
		
					</Card.Body>

				</Accordion.Collapse>

				</Card>

			</Accordion>

		  )
		  
		  if(Object.entries(subSecs).length === 0) {
			  return ("None Available.");
		  }
		  return subSecs;
  }

  render() {
    return (
      
<div>
<div class="card text-white bg-secondary mb-5">
  <div class="card-header">
    <div class = "row" md = "auto">
      <div class = "col" md = "auto">
      <h3>{this.props.data.name} </h3>
      <h6 class="card-subtitle mb-2 text-muted">
      
      <h6 class="text-white">
      {this.props.data.number} <Badge variant="info">{this.props.data.credits} Credits</Badge>  | Subject: {this.props.data.subject}
      </h6>

        </h6>
        
      </div>

    </div> 
  </div>

  <cartInfo uniqueK={this.props.uniqueK} data={this.props.data} sec="0" sub="0" type="allCourse" courseListCB={this.props.courseListCB} inCart={this.props.inCart} checklist={this.props.checklist}/>
  <div class = "col" md = "auto">
      
      <Button variant="primary" size="sm" onClick={() => this.handleShow()} block>
      <b>View Sections</b>
      </Button>
  
  <br/>
  
      <AddToCart 
      courseListCB={this.props.courseListCB} 
      inCart={this.props.inCart} 
      checklist={this.props.checklist}
      uniqueK={this.props.uniqueK} 
      data={this.props.data} 
      sec="0" 
      sub="0" 
      type="allCourse" 
      />

        </div>
  
  <div class="card-body">


      <Modal size="xl" show={this.state.show} onHide={() => this.handleShow()}>
					<Card.Body>
						<Table size="sm" variant = "dark">
							<thead><tr>
								<th>Section Number</th>
                <th>Add/Drop Section</th>
                <th>Subsections</th>
                <th>Section Time</th>
								<th>Section Location</th>
                <th>Section Instructor</th>

							</tr>
              </thead>
							<tbody>

								{this.sectionInformation()}
							</tbody>
						</Table>
					</Card.Body>
				</Modal>

    <h5 > <b>Course Description:</b></h5>
    <p >{this.props.data.description}</p>

    <h5 > <b>Prerequisite:</b></h5>

    <p >{this.myRequisites()}</p>

    <h5> <b>Keywords:</b></h5>
    
    <h5>
    <Badge variant="light" >{this.kwAnnotate()}</Badge>
    </h5>
    



  </div>


</div>

      </div>
    )
  }
}

export default Course;
