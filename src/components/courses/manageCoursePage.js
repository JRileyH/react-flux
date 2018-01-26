"use strict";

var React = require('react');
var Router = require('react-router');
var Form = require('./CourseForm');
var CourseActions = require('../../actions/courseActions');
var CourseStore = require('../../stores/courseStore');
var toastr = require('toastr');

var ManageCoursePage = React.createClass({
    mixins: [
        Router.Navigation
    ],
    statics: {
        willTransitionTo: function(transition, params, query, callback){
            callback();
        },
        willTransitionFrom: function(transition, component){
           if(component.state.dirty && !confirm('Leave without saving?')){
               transition.abort();
           }

        }
    },
    getInitialState: function(){
        return{
            course: { id: -1, title: '', watchHref: '', author: -1, length: '', category: '' },
            errors: {},
            dirty: false
        };
    },
    componentWillMount: function(){
        var courseId = this.props.params.id;
        if(courseId) this.setState({course: CourseStore.getCourseById(courseId)});
    },
    courseFormIsValid: function(){
        var formIsValid = true;
        this.state.errors = {};

        if(this.state.course.title.length < 3){
            this.state.errors.title = 'Title must be at least 3 characters';
            formIsValid = false;
        }
        this.setState({ errors: this.state.errors });
        return formIsValid;
    },
    setCourseState: function(event){
        if(!this.state.dirty)this.setState({dirty: true})
        var field = event.target.name;
        var value = event.target.value;
        this.state.course[field] = value;
        return this.setState({course: this.state.course})
    },
    saveCourse: function(event){
        event.preventDefault();
        if(!this.courseFormIsValid()) return;
        if(!this.state.course.id){
            CourseActions.createCourse(this.state.course);
            toastr.success('Course saved.');
        } else {
            CourseActions.editCourse(this.state.course);
            toastr.success('Course updated.');
        }
        
        this.setState({dirty: false})
        this.transitionTo('courses');
    },
    render: function(){
        
        return(
            <div>
                <h1>Manage Course</h1>
                <Form
                    course={this.state.course}
                    onChange={this.setCourseState}
                    onSave={this.saveCourse}
                    errors={this.state.errors}
                />
            </div>
        );
    }
});

module.exports = ManageCoursePage;