"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;
var Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')}></DefaultRoute>
        <Route name="about" handler={require('./components/about/aboutPage')}/>
        <Route name="authors" handler={require('./components/authors/authorPage')}/>
        <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')}/>
        <Route name="editAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage')}/>
        <Route name="courses" handler={require('./components/courses/coursePage')}/>
        <Route name="addCourse" path="course" handler={require('./components/courses/manageCoursePage')}/>
        <Route name="editCourse" path="course/:id" handler={require('./components/courses/manageCoursePage')}/>
        <NotFoundRoute handler={require('./components/notFoundPage')}/>
    </Route>
);

module.exports = routes;