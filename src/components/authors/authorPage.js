"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({
    getInitialState: function() {
        return {
            authors: []
        }
    },
    componentDidMount: function() {
        if(this.isMounted()) this.setState({ authors: AuthorApi.getAllAuthors() });
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