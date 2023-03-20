
import firebase from "firebase/app";

const firebaseConfig = {
    //   copy your firebase config informations
    apiKey: "AIzaSyC83qnIugk6Gtne0-NvHJZuJo9v25c29hw",
    authDomain: "capstone-fund-website.firebaseapp.com",
    databaseURL: "https://capstone-fund-website-default-rtdb.firebaseio.com",
    projectId: "capstone-fund-website",
    storageBucket: "capstone-fund-website.appspot.com",
    messagingSenderId: "261919550921",
    appId: "1:261919550921:web:686845ffc25aaf78074c18",
    measurementId: "G-1J8HQKC1YN"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var acctDB = firebase.database().ref("signup-form");
  
  document.getElementById("signup-form").addEventListener('submit', submitForm);
  
  function submitForm(e) {
    e.preventDefault();
    
    var emailid = getElementVal("inputEmail");
    var PWD = getElementVal("inputPassword");
  
    //saveMessages(emailid, PWD); // have to unlock later

    console.log(emailid, PWD);
  
    //   enable alert
    //document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    // setTimeout(() => {
    //   document.querySelector(".alert").style.display = "none";
    // }, 3000);
  
    //   reset the form
//     document.getElementById("contactForm").reset();
  };
  
  const saveMessages = (emailid, PWD) => {
    var newContactForm = acctDB.push();
  
    newContactForm.set({
      email: emailid,
      password: PWD,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };