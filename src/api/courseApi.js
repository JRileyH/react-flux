"use strict";

var courses = require('./courseData').courses;
var _ = require('lodash');
var courseCount = 1004;

var _generateId = function() {
	return courseCount++;
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item));
};

var CourseApi = {
	getAllCourses: function() {
		return _clone(courses);	
	},

	getCourseById: function(id) {
		var course = _.find(courses, {id: id});
		return _clone(course);
	},

	saveCourse: function(course) {
		if (course.id) {
			var existingCourseIndex = _.indexOf(courses, _.find(courses, {id: course.id})); 
			courses.splice(existingCourseIndex, 1, course); 
		} else {
			course.id = _generateId(course);
			courses.push(_clone(course));
		}
		return course;
	},

	deleteCourse: function(id) {
		_.remove(courses, { id: id});
	}
};

module.exports = CourseApi;