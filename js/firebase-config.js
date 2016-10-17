"use strict";
var firebase = require('firebase');
var fireConfig = {
    apiKey: "AIzaSyA0EpbxHRpQo61veZ_ZSHEEFG1-WWv9FAI",
    authDomain: "notey-app.firebaseapp.com",
    databaseURL: "https://notey-app.firebaseio.com",
    storageBucket: "notey-app.appspot.com",
    messagingSenderId: "28163470436"
};
firebase.initializeApp(fireConfig);
var noteForm = document.getElementById('note-form');
noteForm.onsubmit = function () {
    var noteTitleEle = document.getElementById('note-title');
    var noteContentEle = document.getElementById('note-content');
    var newNote = {
        content: noteContentEle.value,
        title: noteTitleEle.value,
        createtOn: firebase.database.ServerValue.TIMESTAMP
    };
    firebase.database().ref().push(newNote);
};
//# sourceMappingURL=firebase-config.js.map