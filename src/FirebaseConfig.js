import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCxuVwXtuSxEOnz5Lp4EE4nqiULzMPZmhs",
  authDomain: "hotelproject-7f857.firebaseapp.com",
  projectId: "hotelproject-7f857",
  storageBucket: "hotelproject-7f857.appspot.com",
  messagingSenderId: "771725567145",
  appId: "1:771725567145:web:70033338786f82ff59f5b8",
  measurementId: "G-X3RRCNW0BV",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
