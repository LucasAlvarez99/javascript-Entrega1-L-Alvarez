// ============================
// Variables globales
// ============================
const usuarios = [];
let usuarioLogueado = null;


// ============================
// Función auxiliar: validar email
// ============================
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// ============================
// Registro paso a paso
// ============================
function registrarUsuario() {
  let nombre = prompt(
    "Regístrese luego inicie sesión, por favor\n" +
    "nombre:\n" +
    "e-mail:\n" +
    "contraseña:\n" +
    "confirmar contraseña:\n\n" +
    "Ingrese su nombre:"
  );
  if (!nombre) return;

  let email = prompt(
    "Regístrese luego inicie sesión, por favor\n" +
    "nombre: " + nombre + "\n" +
    "e-mail:\n" +
    "contraseña:\n" +
    "confirmar contraseña:\n\n" +
    "Ingrese su e-mail:"
  );

  if (!validarEmail(email)) {
    alert("Formato de mail inválido");
    return;
  }

  let password = prompt(
    "Regístrese luego inicie sesión, por favor\n" +
    "nombre: " + nombre + "\n" +
    "e-mail: " + email + "\n" +
    "contraseña:\n" +
    "confirmar contraseña:\n\n" +
    "Ingrese su contraseña:"
  );

  let confirmPassword = prompt(
    "Regístrese luego inicie sesión, por favor\n" +
    "nombre: " + nombre + "\n" +
    "e-mail: " + email + "\n" +
    "contraseña: " + "*".repeat(password.length) + "\n" +
    "confirmar contraseña:\n\n" +
    "Confirme su contraseña:"
  );

  if (password !== confirmPassword) {
    alert("Las contraseñas no coinciden. Intente nuevamente.");
    return;
  }

  const existe = usuarios.some(u => u.email === email);
  if (existe) {
    alert("El usuario ya existe.");
  } else {
    usuarios.push({ nombre, email, password });
    alert("Usuario registrado con éxito. Ahora inicie sesión.");
  }
}

// ============================
// Login con validación de email
// ============================
function login() {
  const email = prompt("Ingrese su email:");
  if (!validarEmail(email)) {
    alert("Formato de mail inválido");
    return;
  }

  const password = prompt("Ingrese su contraseña:");
  const user = usuarios.find(u => u.email === email);

  if (!user || user.password !== password) {
    alert("Mail inexistente o mail y contraseña incorrectos");
    return;
  }

  usuarioLogueado = user;
  alert(`Bienvenido ${user.nombre}`);

  listarProductos();
}

// ============================
// Listado de productos
// ============================
function listarProductos() {
  let lista = "=== LISTADO DE PRODUCTOS ===\n\n";
  productos.forEach((p) => {
    lista += `ID: ${p.id} | ${p.nombre} | $${p.precio}\n`;
  });

  alert(lista);
}

// ============================
// Menú principal
// ============================
function menu() {
  let opcion = "";

  do {
    opcion = prompt(
      "Para acceder a la lista de productos Regístrese o Inicie Sesión\n\n" +
      "1- Registrarse\n" +
      "2- Login\n" +
      "3- Salir"
    );

    switch (opcion) {
      case "1":
        registrarUsuario();
        break;
      case "2":
        login();
        break;
      case "3":
        alert("Saliendo del sistema...");
        break;
      default:
        alert("Opción inválida");
    }
  } while (opcion !== "3");
}

// ============================
// Iniciar simulador
// ============================
menu();
