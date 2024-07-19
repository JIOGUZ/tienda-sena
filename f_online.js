 // Import the functions you need from the SDKs you need

 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
 import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-Firestore.js";
 import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-Storage.js";
 // TODO: Add SDKs for Firebase products that you want to use

 // Import the functions you need from the SDKs you need

 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration

 const firebaseConfig = {

   apiKey: "AIzaSyDEhM4B8jj2vTGYEGE-uJyD5XIN936ft34",

   authDomain: "tienda-sena-757b4.firebaseapp.com",

   projectId: "tienda-sena-757b4",

   storageBucket: "tienda-sena-757b4.appspot.com",

   messagingSenderId: "771513395275",

   appId: "1:771513395275:web:75771f3ba435064d7c85ce"

 };


  // Initialize Firebase

 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const storage = getStorage(app);

 export {db, storage};
