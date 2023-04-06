
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
// for some reason i keep getting a syntax error that this cannot exist outside of a module. idk why tho. 

//import { getAuth } from 'firebase/auth'; //saved for later

// //creating database 
 import { getDatabase, ref, set } from "firebase/database";

//copied from firebase
const firebaseConfig = {
    apiKey: "AIzaSyC83qnIugk6Gtne0-NvHJZuJo9v25c29hw",
    authDomain: "capstone-fund-website.firebaseapp.com",
    databaseURL: "https://capstone-fund-website-default-rtdb.firebaseio.com",
    projectId: "capstone-fund-website",
    storageBucket: "capstone-fund-website.appspot.com",
    messagingSenderId: "261919550921",
    appId: "1:261919550921:web:686845ffc25aaf78074c18",
    measurementId: "G-1J8HQKC1YN"
};

//initalizing firebase
const app = initializeApp(firebaseConfig);

//initialize realtime database 
const database = getDatabase(app);

//const auth = getAuth(firebaseApp); //saved for later



const btn = document.querySelector('#submitLogin');
const email = document.querySelector('#inputEmail');
const password = document.querySelector('#inputPassword');

let print = email.value + password.value;


const hello = () => {
    event.preventDefault;
    console.log("button clicked");
    console.log(email.value);
    console.log(password.value);
}

btn.addEventListener('click', hello);

function writeUserData (useremail, password) {
    const db = getDatabase();
    set (ref (db, 'testing/' + email.value), {
        uEmail: email.value,
        password: password.value
    });
}
