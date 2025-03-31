// firebase-config.js

// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCD2tJ1Bo23G_R4RhDMVJYlg-JSY_5BJug",
    authDomain: "registro-de-tours.firebaseapp.com",
    projectId: "registro-de-tours",
    storageBucket: "registro-de-tours.firebasestorage.app",
    messagingSenderId: "903773397852",
    appId: "1:903773397852:web:4ebc2e1b59fee274c29799"
  };
  
  // Inicializar Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Variables globales para Auth y Firestore
  const auth = firebase.auth();
  const db = firebase.firestore();
  