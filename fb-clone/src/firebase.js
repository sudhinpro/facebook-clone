import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAi_UqW5vGku079jJmBWYfirOfJO_-M4LI",
  authDomain: "facebook-clone-38d58.firebaseapp.com",
  projectId: "facebook-clone-38d58",
  storageBucket: "facebook-clone-38d58.appspot.com",
  messagingSenderId: "432373047022",
  appId: "1:432373047022:web:835741b0f638d07646ddff",
  measurementId: "G-3DH5EK51EQ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db