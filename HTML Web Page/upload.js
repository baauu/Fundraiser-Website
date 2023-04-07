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

    const storage = getStorage(app);
