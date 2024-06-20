import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDtyq0xeacGS2lvmu9TBvnVShmxF1Ft7XE",
    authDomain: "otp-login-9133b.firebaseapp.com",
    projectId: "otp-login-9133b",
    storageBucket: "otp-login-9133b.appspot.com",
    messagingSenderId: "916870327763",
    appId: "1:916870327763:web:2016d782eee6866ed31326",
    measurementId: "G-ZYJQJ0KJQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;