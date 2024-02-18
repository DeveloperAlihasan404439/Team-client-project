
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDIMrbZT5qJ4ZK3XfA7nh3clVXrWbufCQw",
  authDomain: "swiftymail.firebaseapp.com",
  projectId: "swiftymail",
  storageBucket: "swiftymail.appspot.com",
  messagingSenderId: "598365628430",
  appId: "1:598365628430:web:2451dea90f1f78000ef45f",
  measurementId: "G-6HFSWPYWCF",
};

const app = initializeApp(firebaseConfig);

export default app 