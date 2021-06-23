import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCslqZVX7DVjQ3pgeSWW6Rx4ruswn9YvR4",
    authDomain: "project1-4a8c2.firebaseapp.com",
    projectId: "project1-4a8c2",
    storageBucket: "project1-4a8c2.appspot.com",
    messagingSenderId: "1007916356531",
    appId: "1:1007916356531:web:cbca30aee98c310a3831c6"
  }; 

firebase.initializeApp(firebaseConfig);

export default firebase;