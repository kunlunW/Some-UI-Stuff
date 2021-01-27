import React from 'react'
import { Card, Button, Form } from 'react-bootstrap'

class PreCourseBuilder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapseStatus: false,
            variant: []
        }
        this.ratePick = React.createRef()
    }

    collapseControl() {
        let caption = 'View';
        // let variant = "info";
        let modalClick = () => this.collapseModal(true);
        let changeVariant = () => this.setVariant("parimary")
  
        if(this.state.collapseStatus) {
            caption = 'Hide';
          changeVariant = () => this.setVariant("danger")
          modalClick = () => this.collapseModal(false)
        }
  
        return (
          <Button 
          variant= "danger" 
          style={{width: 55, height: 45, fontSize: 20, padding: 0, position: 'absolute', right: 20, top: 20}} 
          onClick={modalClick}><b>{caption}</b></Button>
        )

      }

      collapseModal(value) {
        this.setState({collapseStatus: value});
      }

      setVariant(color) {
          this.setState({variant: color })
      }

      render() {

          const { data } = this.props
          
          return (
            <Card style={{width: '50%', margin: '5px auto'}}>
                <Card.Body>
                    <Card.Title>

                        <div style={{maxWidth: 250}}>
                        {data.name}
                        </div>
                        {this.collapseControl()}
                    </Card.Title>
                    <Card.Subtitle >{data.number} - {data.credits} Credits</Card.Subtitle>

                    { this.state.collapseStatus === true && ( <div> {data.description} </div> ) }

                    <Form>
                        <Form.Group>
                            <Form.Control ref={this.ratePick } as="select" 
                            onChange={() => {this.props.ratingControl(this.ratePick.current.value, data)}}>
                                <option key="scores">Please rate this course!</option>
                                <option key="1">Worst Course Ever! :(</option>
                                <option key="2">I dont like it! :O </option>
                                <option key="3">Its an okay class. :|</option>
                                <option key="4">Very good class! :)</option>
                                <option key="5">Fantastic class!!!!! ;) </option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
          )
      }
}

export default PreCourseBuilder