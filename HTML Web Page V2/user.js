
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
    import { getDatabase, ref, get, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";
    import { getAuth, createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";

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
    const db = getDatabase();

    var email = document.querySelector("#email");
    var password = document.querySelector("#password");

    var submitBtn = document.querySelector("#submitBtn");


    const userSignIn = async() => {
        const emailVal = email.value;
        const passVal = password.value;
        signInWithEmailAndPassword(auth, emailVal, passVal)
        .then((userCredential) => {
            const user = userCredential.user;
            const password = userCredential.password;
            alert("You have signed in successfully!");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + errorMessage)
            alert(errorMessage)
        })
    }

    //function that helped me trouble shoot
    function display() {
        let emailVal = email.value
        
        console.log(emailVal)
    }

    const checkAuthState = async() => {
        onAuthStateChanged(auth, user => {
            if(user) /*if user exists*/{
                //add the sign out button to account html bar
                //make account tab visible
                
                console.log("user has logged in")
            }
            else {
                
            }
        })
    }


    submitBtn.addEventListener('click', userSignIn);
    
