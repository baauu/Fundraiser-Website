import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
// import { getDatabase, ref, get, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";
import {
    getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, onAuthStateChanged, signOut
} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

var email = document.querySelector("#email");
var password = document.querySelector("#password");

var signInBtn = document.querySelector("#signInBtn");
var signoutBtn = document.querySelector("#signout-nav");

var currentUser = "";



onAuthStateChanged(auth, user => {
    if (user) /*if user exists*/ {
        //add the sign out button to account html bar
        //make account tab visible
        console.log('logged in', user);
        const userID = auth.currentUser;
        const uid = userID.uid;
        currentUser = uid;
        signInNav();

    }
    else {
        console.log('logged OUT', user);
        signOutNav();
    }
})


const userSignIn = async () => {
    const emailVal = email.value;
    const passVal = password.value;

    signInWithEmailAndPassword(auth, emailVal, passVal)
        .then(() => {
            signInNav();
            // checkAuthState();
            // const user = userCredential.user;
            const userID = auth.currentUser;
            const uid = userID.uid;
            currentUser = uid;

            // submitBtn.href = "account.html?" + uid;
            sessionStorage.setItem("userID", uid);
            alert("You have signed in successfully!");
            window.location.href = "index.html";

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage)
            alert(errorMessage)
        })
}

function signInNav() {
    document.getElementById("signout-nav").style.visibility = "visible";
    document.getElementById("myaccount").style.visibility = "visible";
    document.getElementById("login-nav").style.visibility = "hidden";
}
function signOutNav() {
    document.getElementById("signout-nav").style.visibility = "hidden";
    document.getElementById("myaccount").style.visibility = "hidden";
    document.getElementById("login-nav").style.visibility = "visible";
}


const userSignOut = async () => {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
            alert("You have signed out successfully!");
            signOutNav();
            window.location.href = "index.html";

        }).catch((error) => {
            // An error happened.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage)
        });
}


// const checkAuthState = async() => {
//     onAuthStateChanged(auth, user => {
//         if(user) /*if user exists*/{
//             //add the sign out button to account html bar
//             //make account tab visible
//             signInNav();

//         }
//         else {

//         }
//     })
// }

if (signoutBtn) {
    signoutBtn.addEventListener('click', userSignOut);
}

if (signInBtn) {
    signInBtn.addEventListener('click', userSignIn);
}




