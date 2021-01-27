import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

class AddToCart extends React.Component {

  
  MultiplyButtons(cn, bS, bST, bN, tR) {
	  let k = this.props.uniqueK; 
	  let sc = this.props.sec;
	  let da = this.props.data;
	  let sb = this.props.sub
  		  return (
		<Button className={cn} size={bS} variant={bST} onClick={() => this.props.courseListCB(this.props.uniqueK, this.props.data, this.props.sec, this.props.sub, tR)}>
			{bN}
		</Button>
	  );
  }
  
  Helper(cn, bS, bST, bN, tR, booleanEntire) {
			return this.MultiplyButtons(cn, bS, bST, bN, tR);
  }
	
  AllocateBtn() {
	  if(this.props.type === "allCourse") {

		  if(!this.props.inCart) {

			return <Button className="addAll" size= "sm" variant="warning" onClick={() => this.props.courseListCB(this.props.uniqueK, this.props.data, this.props.sec, this.props.sub, false)} block>
			<b>Save All Sections</b> 
		</Button>

		  } else {

			return <Button className="addAll" size= "sm" variant="danger" onClick={() => this.props.courseListCB(this.props.uniqueK, this.props.data, this.props.sec, this.props.sub, true)} block>
			<b>Drop All Sections</b> 
		</Button>

		  }
	  } else if (this.props.type === "section") {
		  if(!this.props.inCart) {

			return <Button className="sections" size= "sm" variant="warning" onClick={() => this.props.courseListCB(this.props.uniqueK, this.props.data, this.props.sec, this.props.sub, false)}>
			<b>Save Sections</b> 
		</Button>

		  } else {

			return <Button className="sections" size= "sm" variant="danger" onClick={() => this.props.courseListCB(this.props.uniqueK, this.props.data, this.props.sec, this.props.sub, true)}>
			<b>Drop Section</b> 
		</Button>
			
		  }
	  } else if (this.props.type === "subsection") {
		  if(!this.props.inCart) {

			return <Button className="subsections" size= "sm" variant="warning" onClick={() => this.props.courseListCB(this.props.uniqueK, this.props.data, this.props.sec, this.props.sub, false)}>
			<b>Save Subsections</b> 
		</Button>

		  } else {

			return <Button className="subsections" size= "sm" variant="danger" onClick={() => this.props.courseListCB(this.props.uniqueK, this.props.data, this.props.sec, this.props.sub, true)}>
			<b>Drop Subsections</b> 
		</Button>

		  }
	  } else {
		  return 0;
	  }
  }

  render() {	  
	return (
		<>
		{this.AllocateBtn()}
		</>
	);
  }
}

export default AddToCart;