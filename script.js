// ======================
// Variables globales
// ======================
let usuario = { nombre: "", email: "", password: "" };
let sesionIniciada = false;

// ======================
// Funciones
// ======================
function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Registro paso a paso con formulario en el prompt
function registrarUsuario() {
  // 1) Nombre
  let nombre = prompt(
    "Registrese luego inicie sesion, por favor\n" +
    "nombre:\n" +
    "e-mail:\n" +
    "contraseña:\n" +
    "confirmar contraseña:\n\n" +
    "ingrese su nombre"
  );
  if (nombre === null || nombre.trim() === "") { alert("Registro cancelado."); return; }
  nombre = nombre.trim();

  // 2) E-mail (con validación de formato)
  let email;
  do {
    email = prompt(
      "Registrese luego inicie sesion, por favor\n" +
      `nombre: ${nombre}\n` +
      "e-mail:\n" +
      "contraseña:\n" +
      "confirmar contraseña:\n\n" +
      "ingrese su mail"
    );
    if (email === null) { alert("Registro cancelado."); return; }
    email = email.trim();
    if (!validarEmail(email)) alert("Formato de mail invalido");
  } while (!validarEmail(email));

  // 3) Contraseña
  let password;
  do {
    password = prompt(
      "Registrese luego inicie sesion, por favor\n" +
      `nombre: ${nombre}\n` +
      `e-mail: ${email}\n` +
      "contraseña:\n" +
      "confirmar contraseña:\n\n" +
      "ingrese su contraseña"
    );
    if (password === null || password === "") { alert("Registro cancelado."); return; }
  } while (!password);

  // 4) Confirmar contraseña
  let confirmar;
  do {
    confirmar = prompt(
      "Registrese luego inicie sesion, por favor\n" +
      `nombre: ${nombre}\n` +
      `e-mail: ${email}\n` +
      `contraseña: ${"*".repeat(password.length)}\n` +
      "confirmar contraseña:\n\n" +
      "confirme su contraseña"
    );
    if (confirmar === null) { alert("Registro cancelado."); return; }
    if (confirmar !== password) alert("Las contraseñas no coinciden. Intente nuevamente.");
  } while (confirmar !== password);

  usuario = { nombre, email, password };
  alert("Usuario registrado con éxito. Ahora inicie sesión.");
}

// Login (con validación de mail)
function login() {
  if (!usuario.email) {
    alert("Debe registrarse antes de iniciar sesión");
    return;
  }

  let email;
  do {
    email = prompt("Ingrese su e-mail:");
    if (email === null) return;
    if (!validarEmail(email)) alert("Formato de mail invalido");
  } while (!validarEmail(email));

  const pass = prompt("Ingrese su contraseña:");
  if (email === usuario.email && pass === usuario.password) {
    sesionIniciada = true;
    alert(`Bienvenido ${usuario.nombre}`);
    mostrarProductos();
  } else {
    alert("Credenciales incorrectas");
  }
}

// Mostrar productos + opción de agregar
function mostrarProductos() {
  let lista = "=== LISTA DE PRODUCTOS ===\n";
  productos.forEach((p, i) => {
    lista += `${i + 1}. ${p.nombre} - $${p.precio}\n`;
  });

  let opcion = confirm(lista + "\n\n¿Desea agregar un producto?\nAceptar = Sí, Cancelar = No");

  if (opcion) { // ahora ACEPTAR = sí
    cargarProducto();
    mostrarProductos();
  }
}

// Cargar producto temporal
function cargarProducto() {
  let nombre = prompt("Ingrese el nombre del producto:");
  if (!nombre) return;

  let precio = prompt("Ingrese el precio del producto:");
  if (!precio || isNaN(precio)) {
    alert("Precio inválido");
    return;
  }

  let confirmacion = confirm(`¿Desea agregar el producto?\n\nNombre: ${nombre}\nPrecio: $${precio}`);
  
  if (confirmacion) {
    productos.push({ nombre, precio: parseFloat(precio) });
    alert("Producto agregado correctamente.");
  } else {
    alert("Operación cancelada, no se agregó el producto.");
  }
}

// ======================
// Menú principal
// ======================
function menu() {
  let opcion;
  do {
    opcion = prompt(
      "Seleccione una opción:\n" +
      "1- Registrarse\n" +
      "2- Login\n" +
      "3- Salir\n\n" +
      "Para acceder a la lista de productos regístrese o inicie sesión."
    );

    switch (opcion) {
      case "1": registrarUsuario(); break;
      case "2": login(); break;
      case "3": alert("Gracias por usar el simulador. ¡Hasta pronto!"); break;
      default: alert("Opción inválida");
    }
  } while (opcion !== "3");
}

// Ejecutar
menu();
