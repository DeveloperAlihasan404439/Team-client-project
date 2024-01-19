// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtoBPlLKT_lMqGDAN32QmA7mh1WMz6Osk",
  authDomain: "team-project-fake-mail.firebaseapp.com",
  projectId: "team-project-fake-mail",
  storageBucket: "team-project-fake-mail.appspot.com",
  messagingSenderId: "840220264794",
  appId: "1:840220264794:web:7260152b42c646bc274b63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;