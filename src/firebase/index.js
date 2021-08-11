import firebase from "firebase/app";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyD8IaP2II2w1PuDNE7t3zllDl8SoG6Mgx4",
  authDomain: "image-database-976d8.firebaseapp.com",
  projectId: "image-database-976d8",
  storageBucket: "image-database-976d8.appspot.com",
  messagingSenderId: "684366720998",
  appId: "1:684366720998:web:6d6fe9590e14efad0b3027",
  measurementId: "G-YW758YSVJQ",
};

firebase.initializeApp(config);

const storage = firebase.storage();

export { storage, firebase as default };
