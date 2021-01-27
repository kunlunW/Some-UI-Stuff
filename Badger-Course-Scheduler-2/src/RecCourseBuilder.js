import React from 'react'
import { Card, Button } from 'react-bootstrap'

class RecCourseBuilder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapseStatus: false,
            variant: []
        }
        this.select = React.createRef()
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
          variant='danger' 
          style={{width: 55, height: 45, fontSize: 20, padding: 0, position: 'absolute', right: 20, top: 20}} 
          onClick={modalClick}>{caption}</Button>
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
                    { this.state.collapseStatus === true && ( <div> {data.description} </div> )} 
                </Card.Body>
            </Card>
          )
      }
}

export default RecCourseBuilder