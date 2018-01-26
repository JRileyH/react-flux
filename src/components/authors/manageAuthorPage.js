"use strict";

var React = require('react');
var Router = require('react-router');
var Form = require('./AuthorForm');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
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
            author: { id: '',firstName: '', lastName: '' },
            errors: {},
            dirty: false
        };
    },
    componentWillMount: function(){
        var authorId = this.props.params.id;
        if(authorId) this.setState({author: AuthorStore.getAuthorById(authorId)});
    },
    authorFormIsValid: function(){
        var formIsValid = true;
        this.state.errors = {};

        if(this.state.author.firstName.length < 3){
            this.state.errors.firstName = 'First name must be at least 3 characters';
            formIsValid = false;
        }
        if(this.state.author.lastName.length < 3){
            this.state.errors.lastName = 'Last name must be at least 3 characters';
            formIsValid = false;
        }

        this.setState({ errors: this.state.errors });
        return formIsValid;
    },
    setAuthorState: function(event){
        if(!this.state.dirty)this.setState({dirty: true})
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author})
    },
    saveAuthor: function(event){
        event.preventDefault();
        if(!this.authorFormIsValid()) return;
        if(!this.state.author.id){
            AuthorActions.createAuthor(this.state.author);
            toastr.success('Author saved.');
        } else {
            AuthorActions.editAuthor(this.state.author);
            toastr.success('Author updated.');
        }
        
        this.setState({dirty: false})
        this.transitionTo('authors');
    },
    render: function(){
        
        return(
            <div>
                <h1>Manage Author</h1>
                <Form
                    author={this.state.author}
                    onChange={this.setAuthorState}
                    onSave={this.saveAuthor}
                    errors={this.state.errors}
                />
            </div>
        );
    }
});

module.exports = ManageAuthorPage;