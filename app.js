// Importa las funciones necesarias de Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

// Configuración de Firebase (copia y pega la configuración que obtuviste en Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyCD2tJ1Bo23G_R4RhDMVJYlg-JSY_5BJug",
  authDomain: "registro-de-tours.firebaseapp.com",
  projectId: "registro-de-tours",
  storageBucket: "registro-de-tours.firebasestorage.app",
  messagingSenderId: "903773397852",
  appId: "1:903773397852:web:4ebc2e1b59fee274c29799"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Inicializar Firestore

// Referencias a los elementos del DOM
const formReserva = document.getElementById('formReserva');
const nombreInput = document.getElementById('nombre');
const fechaInput = document.getElementById('fecha');
const trabajadorInput = document.getElementById('trabajador');
const precioInput = document.getElementById('precio');
const reservasList = document.getElementById('reservasList');

// Función para agregar una nueva reserva a Firestore
formReserva.addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita que la página se recargue al enviar el formulario

  // Obtener los valores del formulario
  const nombre = nombreInput.value;
  const fecha = fechaInput.value;
  const trabajador = trabajadorInput.value;
  const precio = parseFloat(precioInput.value);

  try {
    // Agregar los datos a la colección "reservas" en Firestore
    await addDoc(collection(db, 'reservas'), {
      nombre,
      fecha,
      trabajador,
      precio
    });

    alert('Reserva agregada con éxito!');
    formReserva.reset(); // Resetea el formulario después de agregar la reserva
    cargarReservas(); // Recargar las reservas después de agregar una nueva
  } catch (error) {
    console.error("Error al agregar reserva: ", error);
  }
});

// Función para cargar las reservas desde Firestore
const cargarReservas = async () => {
  reservasList.innerHTML = ''; // Limpiar la lista antes de cargar

  const querySnapshot = await getDocs(collection(db, 'reservas'));
  
  querySnapshot.forEach((doc) => {
    const reserva = doc.data();
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>Tour:</strong> ${reserva.nombre} <br>
      <strong>Fecha:</strong> ${reserva.fecha} <br>
      <strong>Trabajador:</strong> ${reserva.trabajador} <br>
      <strong>Precio:</strong> $${reserva.precio} <br>
    `;
    reservasList.appendChild(li);
  });
};

// Cargar las reservas al iniciar la aplicación
cargarReservas();
