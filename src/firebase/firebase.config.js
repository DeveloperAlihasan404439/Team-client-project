import { initializeApp } from "firebase/app";
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