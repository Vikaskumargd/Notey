import * as firebase from 'firebase';

let fireConfig: any = {
    apiKey: "AIzaSyA0EpbxHRpQo61veZ_ZSHEEFG1-WWv9FAI",
    authDomain: "notey-app.firebaseapp.com",
    databaseURL: "https://notey-app.firebaseio.com",
    storageBucket: "notey-app.appspot.com",
    messagingSenderId: "28163470436"

}
firebase.initializeApp(fireConfig);



let noteForm: HTMLFormElement = <HTMLFormElement>document.getElementById('note-form');

//noteForm.

//let noteButton : HTMLInputElement = <HTMLInputElement>document.getElementById('submitButton');




noteForm.onsubmit =() => {

//ev.preventDefault();

    let noteTitleEle: HTMLInputElement = <HTMLInputElement>document.getElementById('note-title');
    let noteContentEle: HTMLInputElement = <HTMLInputElement>document.getElementById('note-content');

    let newNote: Note = {
        content: noteContentEle.value,
        title: noteTitleEle.value,
        createtOn: firebase.database.ServerValue.TIMESTAMP

    };

    firebase.database().ref().push(newNote);
    

};