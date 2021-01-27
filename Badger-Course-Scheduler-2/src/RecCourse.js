import React from 'react'
import RecCourseBuilder from './RecCourseBuilder'

class RecCourse extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <> <div> { this.props.courses.map(data => ( <RecCourseBuilder data={data} />)) }
                </div>
            </> ) } }

export default RecCourse