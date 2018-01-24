"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1>404. Page Not Found</h1>
                <p>Nothing to see here, folks. Move along.</p>
                <Link className="btn btn-primary btn-lg" to="about">&lt; Back</Link>
            </div>
        );
    }
})

module.exports = NotFoundPage;