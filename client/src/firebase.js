import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6pxZgiurAwKAIUZyursWDllPs4bws_7M",
  authDomain: "video-b8900.firebaseapp.com",
  projectId: "video-b8900",
  storageBucket: "video-b8900.appspot.com",
  messagingSenderId: "241485290021",
  appId: "1:241485290021:web:f1efc6ea5fde53bbe73dcc",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
