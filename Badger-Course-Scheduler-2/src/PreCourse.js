import React from 'react'
import { Card, Button } from 'react-bootstrap'
import PreCourseBuilder from './PreCourseBuilder'

class PreCourse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            preCourseList: [],
            preList: []
        }
    }

    componentDidMount() {
        this.fetchingData()
    }

    async fetchingData() {
        
        const coursesURL = 'http://mysqlcs639.cs.wisc.edu:53706/api/react/students/5022025924/classes/completed'
        
        const coursesData = await (await fetch(coursesURL)).json()
        
        let preCourseList = this.props.courses

        preCourseList = preCourseList.filter((preNum) => {
            return coursesData.data.includes(preNum.number)
        })
        
        this.setState({

            preCouseList: coursesData.data,

            preList: preCourseList
        })

        
    }

    render() {
        return (
            <>
                {  this.state.preList.map((data) => (  
                        <PreCourseBuilder 
                        data={data} 
                        courses={this.state.preList} 
                        ratingControl={(data, course) => { this.props.ratingControl(data, course) }} />
                    )) }
            </>
        )
    }
}

export default PreCourse