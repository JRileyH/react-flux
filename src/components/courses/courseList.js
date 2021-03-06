"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var CourseActions = require('../../actions/courseActions');
var toastr = require('toastr');

var CourseList = React.createClass({
    propTypes: {
        courses: React.PropTypes.array.isRequired
    },
    deleteCourse: function(id, event){
        event.preventDefault();
        CourseActions.deleteCourse(id);
        toastr.success('Course Deleted');
    },
    render: function(){
        var createCourseRow = function(course){
            return (
                <tr key={course.id}>
                    <td><a href="#" onClick={this.deleteCourse.bind(this, course.id)}>Delete</a></td>
                    <td><Link to="editCourse" params={{id: course.id}}>{course.id}</Link></td>
                    <td><a href={course.watchHref}>{course.title}</a></td>
                    <td><Link to="editAuthor" params={{id: course.author}}>{course.author}</Link></td>
                    <td>{course.length}</td>
                    <td>{course.category}</td>
                </tr>
            );
        }
        return (
            <div>
                <table className="table">
                    <thead>
                        <th></th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Length</th>
                        <th>Category</th>
                    </thead>
                    <tbody>
                        {this.props.courses.map(createCourseRow, this)}
                    </tbody>
                </table>
            </div>
        )
    }
});

module.exports = CourseList;