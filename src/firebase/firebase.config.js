
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDIMrbZT5qJ4ZK3XfA7nh3clVXrWbufCQw",
  authDomain: "swiftymail.firebaseapp.com",
  projectId: "swiftymail",
  storageBucket: "swiftymail.appspot.com",
  messagingSenderId: "598365628430",
  appId: "1:598365628430:web:2451dea90f1f78000ef45f",
  measurementId: "G-6HFSWPYWCF"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage();


const imagesRef = ref(storage, 'images');


const spaceRef = ref(storage, 'images/space.jpg');
const storageRef = ref(storage, 'some-child');

const bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
uploadBytes(storageRef, bytes).then((snapshot) => {
  console.log('Uploaded an array!');
});

export default app;