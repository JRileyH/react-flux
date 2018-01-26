"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
    createAuthor: function(author){
        var newAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        })
    },
    editAuthor: function(author){
        var author = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: ActionTypes.EDIT_AUTHOR,
            author: author
        })
    }
};

module.exports = AuthorActions;