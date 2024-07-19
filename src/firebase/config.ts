import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD7GzmCpHTMgbaSLosAjcgcnfQLo66QWi8",
  authDomain: "devpixel-c5383.firebaseapp.com",
  projectId: "devpixel-c5383",
  storageBucket: "devpixel-c5383.appspot.com",
  messagingSenderId: "1064723595663",
  appId: "1:1064723595663:web:06d0aae76bc6e4a4080bfa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth }