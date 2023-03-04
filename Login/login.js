import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";

import {
  getDatabase,
  ref,
  set,
  update,
  onValue,
  push,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDZkIcjDzxAL0_l0JTP_wDgSx0l_3-Fn9o",
  authDomain: "miniprojectedevgeah.firebaseapp.com",
  databaseURL: "https://miniprojectedevgeah-default-rtdb.firebaseio.com",
  projectId: "miniprojectedevgeah",
  storageBucket: "miniprojectedevgeah.appspot.com",
  messagingSenderId: "945375156625",
  appId: "1:945375156625:web:a2fe34d185101bd62fa230",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

let userNm;

const logInBtn = document.getElementById("logInBtn");

logInBtn.addEventListener("click", logInFunction);

function logInFunction(e) {
  //sign in + update
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      let lgDate = new Date();
      update(ref(database, "users/" + user.uid), {
        date: lgDate,
      })
        .then(() => {
          alert("user logged");
          console.log(user.email);
          window.location.href = "../index.html";
          userNm = user.email;
          localStorage.setItem("userName", userNm);
        })
        .catch((error) => {
          alert(error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = "invalid email or password";
      alert(errorMessage);
    });
}
