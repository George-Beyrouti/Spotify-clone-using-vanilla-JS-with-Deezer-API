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
const userName = document.getElementById("username");
const password = document.getElementById("password");
const button = document.querySelector("button");

let userNm;
button.onclick = (e) => {
  e.preventDefault();
  createUserWithEmailAndPassword(auth, userName.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      set(ref(database, "users/" + user.uid), {
        email: userName.value,
        password: password.value,
      })
        .then(() => {
          alert("user created");
          window.location.href = "../index.html";
          userNm = user.email;
          localStorage.setItem("userName", userNm);
        })
        .catch((error) => {
          alert("error");
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = "invalid email or password";
      alert(errorMessage);
    });
};
