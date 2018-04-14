import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD3HdZ0AqjUNdQgRtooTJTJT9ysX4whSKE",
    authDomain: "xiaofanye-c3a21.firebaseapp.com",
    databaseURL: "https://xiaofanye-c3a21.firebaseio.com",
    projectId: "xiaofanye-c3a21",
    storageBucket: "xiaofanye-c3a21.appspot.com",
    messagingSenderId: "997363906988"
  };

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();
const db = firebase.database();

export {
  auth,
  db,
};
