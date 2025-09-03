// ============================
// Variables globales
// ============================
const usuarios = [];
let usuarioLogueado = null;

// ============================
// Funciones
// ============================

// Registro de usuario
function registrarUsuario() {
  const nombre = prompt("Ingrese su nombre:");
  const email = prompt("Ingrese su email:");
  const password = prompt("Ingrese su contraseña:");

  if (!nombre || !email || !password) {
    alert("⚠️ Todos los campos son obligatorios");
    return;
  }

  const existe = usuarios.some(u => u.email === email);
  if (existe) {
    alert("❌ El usuario ya existe");
  } else {
    usuarios.push({ nombre, email, password });
    alert("✅ Usuario registrado con éxito");
  }
}

// Login
function login() {
  const email = prompt("Ingrese su email:");
  const password = prompt("Ingrese su contraseña:");

  const user = usuarios.find(u => u.email === email);

  if (!user || user.password !== password) {
    alert("❌ Mail inexistente o mail y contraseña incorrectos");
    return;
  }

  usuarioLogueado = user;
  alert(`✅ Bienvenido ${user.nombre}`);
}

// Listado de productos
function listarProductos() {
  if (!usuarioLogueado) {
    alert("⚠️ Debe iniciar sesión para ver los productos");
    return;
  }

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
      "Seleccione una opción:\n1- Registrar\n2- Login\n3- Listar productos\n4- Salir"
    );

    switch (opcion) {
      case "1":
        registrarUsuario();
        break;
      case "2":
        login();
        break;
      case "3":
        listarProductos();
        break;
      case "4":
        alert("👋 Saliendo del sistema...");
        break;
      default:
        alert("Opción inválida");
    }
  } while (opcion !== "4");
}

// ============================
// Iniciar simulador
// ============================
menu();