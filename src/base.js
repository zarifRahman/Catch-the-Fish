import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBz2mRn4bH3JYwLgHr96FZOxU3m9XUkTEc",
    authDomain: "catch-of-the-day-e3117.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-e3117.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

export default base;