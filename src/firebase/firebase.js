import firebase from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCHy742KkPsYN9hxdTBmDI2kDQ-OxKsU9w",
  authDomain: "petrockfinance-email-capture.firebaseapp.com",
  projectId: "petrockfinance-email-capture",
  storageBucket: "petrockfinance-email-capture.appspot.com",
  messagingSenderId: "43750434197"
};

firebase.initializeApp(config);

const auth = firebase.auth();
export { auth };
