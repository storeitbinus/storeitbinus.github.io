const firebaseConfig = {
  apiKey: "AIzaSyDEaUtMlHZ01XWHE1k5bL0Srm75TAgcUaQ",
  authDomain: "fir-test-b1908.firebaseapp.com",
  projectId: "fir-test-b1908",
  storageBucket: "fir-test-b1908.appspot.com",
  messagingSenderId: "337934693931",
  appId: "1:337934693931:web:2e3dc1211fcfd95d511c6e",
  measurementId: "G-VDG77DZEQN"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDEaUtMlHZ01XWHE1k5bL0Srm75TAgcUaQ",
//   authDomain: "fir-test-b1908.firebaseapp.com",
//   projectId: "fir-test-b1908",
//   storageBucket: "fir-test-b1908.appspot.com",
//   messagingSenderId: "337934693931",
//   appId: "1:337934693931:web:2e3dc1211fcfd95d511c6e",
//   measurementId: "G-VDG77DZEQN"
// };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore()