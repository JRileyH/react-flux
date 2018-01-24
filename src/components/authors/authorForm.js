"use strict";

var React = require('react');

var AuthorForm = React.createClass({
    render: function(){
        return(
            <form>
                <label htmlFor="firstName">First Name</label>
                <input type="text"
                    name="firstName"
                    className="form-control"
                    ref="firstName"
                    onChange={this.props.onChange}
                    value={this.props.author.firstName}
                />
                <br />

                <label htmlFor="lastName">Last Name</label>
                <input type="text"
                    name="lastName"
                    className="form-control"
                    ref="lastName"
                    onChange={this.props.onChange}
                    value={this.props.author.lastName}
                />
                <br />

                <input type="submit" value="Save" className="btn btn-primary"/>
            </form>
        );
    }
});

module.exports = AuthorForm;