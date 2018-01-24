"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function(){
        return (
            <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to="app">
                    <img width="100" src="./images/logo.png"/>
                </Link>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><Link className="nav-link" to="app">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="about">About</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="authors">Authors</Link></li>
                </ul>
            </nav>
            </div>
        )
    }
});

module.exports = Header;