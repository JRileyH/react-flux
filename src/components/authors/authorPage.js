"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({
    getInitialState: function() {
        return {
            authors: AuthorStore.getAllAuthors()
        }
    },
    render: function(){
        return (
            <div>
                <h1>Authors</h1>
                <Link className="btn btn-primary" to="addAuthor">Add Author</Link>
                <AuthorList authors={this.state.authors}/>
            </div>
        )
    }
});

module.exports = AuthorPage;