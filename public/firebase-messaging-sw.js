import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyAQp6hGdGXdmXuTEkb83JypErt0AnOwxGE",
  authDomain: "pomodoro-4f358.firebaseapp.com",
  databaseURL: "https://pomodoro-4f358.firebaseio.com",
  projectId: "pomodoro-4f358",
  storageBucket: "pomodoro-4f358.appspot.com",
  messagingSenderId: "214336098529"
};

firebase.initializeApp(config);

const messaging = firebase.messaging();
