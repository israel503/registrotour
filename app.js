// Configuración de Firebase (copia y pega la configuración que obtuviste en Firebase Console)
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID"
  };
  
  // Inicializa Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  // Referencias a los elementos del DOM
  const formReserva = document.getElementById('formReserva');
  const nombreInput = document.getElementById('nombre');
  const fechaInput = document.getElementById('fecha');
  const trabajadorInput = document.getElementById('trabajador');
  const precioInput = document.getElementById('precio');
  const reservasList = document.getElementById('reservasList');
  
  // Función para agregar una nueva reserva a Firestore
  formReserva.addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const nombre = nombreInput.value;
    const fecha = fechaInput.value;
    const trabajador = trabajadorInput.value;
    const precio = parseFloat(precioInput.value);
  
    try {
      await db.collection('reservas').add({
        nombre,
        fecha,
        trabajador,
        precio
      });
  
      alert('Reserva agregada con éxito!');
      formReserva.reset();
      cargarReservas(); // Recargar las reservas después de agregar una nueva
    } catch (error) {
      console.error("Error al agregar reserva: ", error);
    }
  });
  
  // Función para cargar las reservas desde Firestore
  const cargarReservas = async () => {
    reservasList.innerHTML = ''; // Limpiar la lista antes de cargar
  
    const querySnapshot = await db.collection('reservas').get();
    
    querySnapshot.forEach(doc => {
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
  