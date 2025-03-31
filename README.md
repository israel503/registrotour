# registrotour



estructura de mi aplicacion.
datos de firebase:
  apiKey: "AIzaSyCD2tJ1Bo23G_R4RhDMVJYlg-JSY_5BJug",
  authDomain: "registro-de-tours.firebaseapp.com",
  projectId: "registro-de-tours",
  storageBucket: "registro-de-tours.firebasestorage.app",
  messagingSenderId: "903773397852",
  appId: "1:903773397852:web:4ebc2e1b59fee274c29799"


  estructura app
  - escritorio.html aqui vera todas las reservas que coincidad con el usuario accedido.
  -ediitar_tour.html
 - index.html  aqui tendrá el login usuario y contraseña
  - agregar_tour.html aqui se agregaran los tour con los siguientes campos
  el id de documento se guardará con fecha y hora del registro
  embarcacion tipo texto
  capitan tipo texto
ayudante tipo texto
estado tipo texto
personas tipo numero
fecha del tour: tipo fecha
hora del tour: tipo numero 12:45
tiempo tipo numero 
precio tipo numero
pago tipo texto

como nos conocio? tipo texto
cliente tipo texto
gestionado por tipo selec de una lista (este campo es el que se va comparar posteriormente con el usuario accedido, por ejemplo si yo agrego la reserva y introduzco que fue gestionada por israel, cuando israel haga login en su sistema podrá ver todas las reservas donde su usuario es igual al campo "gestionado por" israel)
   
      