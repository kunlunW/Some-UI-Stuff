import React from 'react'
import './App.css';
import SearchAndFilter from './SearchAndFilter';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Card from 'react-bootstrap/Card';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.searchAndFilter = new SearchAndFilter();
    this.search = React.createRef();
    this.subject = React.createRef();
    this.minCr = React.createRef();
    this.maxCr = React.createRef();
  
    this.state = {
		CartSwitch: true,
		cartName: "Go to Cart",
		queue: [],
		disabled: false,
    booleanQueue: true
    
	};
	this.refresh = this.refresh.bind(this);
  }

  

  refresh() {
    let c = this.props.courses;
    let curr = this.search.current.value;
    //let q = this.state.queue;
    let v = this.subject.current.value;
    let min = this.minCr.current.value; 
    let max = this.maxCr.current.value;

    let newEntry = this.searchAndFilter.searchAndFilter(c, curr, v, min, max)
    this.props.refresh(newEntry);
  }

  creditsLimitor(certainValue) {

    let allowedChar = ['0','1','2','3','4','5','6','Backspace'];
    if(allowedChar.indexOf(certainValue.key) == -1)
      certainValue.preventDefault();
  }

  CoursePicker() {
    let CourseList = [];
    for(const choices of this.props.subjects) {
      let choice = <option key={choices}>
        {choices}
        </option>
      CourseList.push(choice);
    }
    return CourseList;
  }
  
  CartSwitche() {
	  if(!this.state.CartSwitch) {
		  this.setState({
			  variant: "warning",
			  cartName: "Go to Cart",
      });
      
		  if(this.state.queue.length === 0) {
			this.props.refresh(this.props.courses);
      } 
      else {
			this.props.refresh(this.searchAndFilter.searchAndFilter(this.props.courses, this.state.queue, this.state.booleanQueue, this.subject.current.value, this.minCr.current.value, this.maxCr.current.value));
		  }
	  //User is in cart:
    } 
    

    else {
		  this.setState({
			  variant: "danger",
			  cartName: "Hide Cart",
		  });
		  this.props.refresh(this.props.cart);
	  }
	  
	  this.props.leftBarCB(this.state.CartSwitch);
  }
  

  gotoCar() {
    this.setState({
      variant: "warning",
      cartName: "Go to Cart",
    });
    if(this.state.queue.length === 0) {
			this.props.refresh(this.props.courses);
      } 
      else {
			this.props.refresh(this.searchAndFilter.searchAndFilter(this.props.courses, this.state.queue, this.state.booleanQueue, this.subject.current.value, this.minCr.current.value, this.maxCr.current.value));
		  }
    
	  }
	  
  hidetheCart(){
    this.setState({
      variant: "danger",
      cartName: "Hide Cart",
    });
    this.props.refresh(this.props.cart);
  }

  respondSwitch() {
	  this.setState(former => ({
		  CartSwitch: !former.CartSwitch,
		  disabled: !former.disabled
	  }));
	  this.CartSwitche();
  }
  
  queueCB(data, booleanQueue) {
	  this.setState({
		  queue: data,
		  booleanQueue: booleanQueue
	  });
	  
	  if(this.state.CartSwitch) {
      let c = this.props.courses;
    let v = this.search.current.value;
    let min = this.minCr.current.value; 
    let max = this.maxCr.current.value;
    let newResult = this.searchAndFilter.searchAndFilter(c, data, booleanQueue, v, min, max); 
		  this.props.refresh(newResult);
	  }
  }


  addChip(e) {
    if(e.key == 'Enter' && this.search.current.value != '') {
      if(!this.state.queue.includes(this.search.current.value)) {
        this.state.queue.push(this.search.current.value);
        this.refresh();
      }
      this.search.current.value = '';
    }
  }
  

  render() {
    return (
        <Card md = "auto" bg = "info" style={{width: '15rem', position: 'fixed'}}>

        <Card.Img variant="top" src="https://media.socastsrm.com/wordpress/wp-content/blogs.dir/2272/files/2020/07/2727-1.png" />
		<Card.Body>
      
		  <Tabs onSelect={key => this.tabHandler(key)}>
        <Tab eventKey="search">
            <Form>

            <Form.Group onChange={() => this.refresh()} >
                <Form.Label><b>Search Keywords</b></Form.Label>
                <Form.Control type="text" placeholder="Search" autoComplete="off" ref= {this.search}/>
              </Form.Group>


			  <fieldset disabled={this.state.disabled}>
					<Form.Group >
					<Form.Label ><b>Select Subject</b></Form.Label>
						<Form.Control as="select" ref={this.subject} onChange={() => this.refresh()}>
							{this.CoursePicker()}
						</Form.Control>
					</Form.Group>
			  </fieldset>

              <div style={{display: 'flex', flexDirection: 'row'}}>
			    <fieldset disabled={this.state.disabled}>
					
						<Form.Group onChange={() => this.refresh()} onKeyDown={(certainValue) => this.creditsLimitor(certainValue)}>
							<Form.Label><b>Credits</b></Form.Label>
							<Form.Control type="text" placeholder="Min" autoComplete="off" ref={this.minCr}/>
						</Form.Group>
					
				</fieldset>
              <div style={{marginLeft: '10px', marginRight: '10px', marginTop: '35px'}}><b>to</b></div>
				<fieldset disabled={this.state.disabled}>
					
						<Form.Group style={{marginTop: '32px'}} onChange={() => this.refresh()} onKeyDown={(certainValue) => this.creditsLimitor(certainValue)}>
							<Form.Control type="text" placeholder="Max" autoComplete="off" ref={this.maxCr}/>
						</Form.Group>
				</fieldset>
              </div>


            </Form>
			<br/>
			<Button id = "1" size="lg" variant= "warning" onClick={() => this.respondSwitch()} block>
        {this.state.cartName}
			</Button>

		  </Tab>
      
		  </Tabs>
		  </Card.Body>
        </Card>
      
    )
  }
}

export default Sidebar;










