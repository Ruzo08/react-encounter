import React, { Component } from 'react';
import Course from './Course';
import Title from './Title';
import {CourseConsumer} from '../Context';
import Navbar from './Navbar';

class CourseList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="course"/>
                        <div className="row">
                            <CourseConsumer>
                                {value=> {
                                        return value.course.map(courses=> {
                                            return <Course key={courses.id} courses={courses}/>
                                        })
                                    }
                                }
                            </CourseConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        );
    }
}

export default CourseList;