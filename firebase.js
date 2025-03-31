import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCD2tJ1Bo23G_R4RhDMVJYlg-JSY_5BJug",
  authDomain: "registro-de-tours.firebaseapp.com",
  projectId: "registro-de-tours",
  storageBucket: "registro-de-tours.appspot.com",
  messagingSenderId: "903773397852",
  appId: "1:903773397852:web:4ebc2e1b59fee274c29799",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, signInWithEmailAndPassword };
