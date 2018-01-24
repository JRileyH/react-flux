"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1>Hello from React</h1>
                <p>Using react for ultra fast web apps.</p>
                <Link className="btn btn-primary btn-lg" to="about">Learn More</Link>
            </div>
        );
    }
})

module.exports = Home;