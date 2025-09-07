# Mini Sistema de Login, Registro y Gestión de Productos

Este proyecto es un simulador básico de registro, inicio de sesión y gestión de productos desarrollado en JavaScript puro. El objetivo principal es practicar estructuras de control, funciones, arrays y la interacción básica con el usuario mediante cuadros de diálogo (`prompt`, `alert`, `confirm`).

## Estructura del Proyecto

```
index.html
script.js
db/
  productos.js
```

- **index.html**: Página principal que carga los scripts necesarios.
- **db/productos.js**: Simulación de una base de datos de productos como un array de objetos.
- **script.js**: Lógica principal del sistema (registro, login, menú y gestión de productos).

## Funcionamiento Técnico

### 1. Registro de Usuario

El usuario puede registrarse proporcionando nombre, email y contraseña. El sistema valida el formato del email y la coincidencia de la contraseña y su confirmación. Los datos se almacenan en la variable global `usuario`.

### 2. Inicio de Sesión

El usuario debe iniciar sesión con el email y la contraseña registrados. Si las credenciales son correctas, se habilita el acceso a la lista de productos.

### 3. Gestión de Productos

Al iniciar sesión, se muestra la lista de productos definida en [`db/productos.js`](db/productos.js). El usuario puede agregar productos temporalmente durante la sesión. Cada producto tiene nombre y precio, y se valida que el precio sea numérico.

### 4. Menú Principal

El menú principal permite al usuario elegir entre registrarse, iniciar sesión o salir del sistema. El flujo se controla mediante un bucle y cuadros de diálogo.

## Scripts

- [`script.js`](script.js): Contiene todas las funciones principales:
  - [`validarEmail`](script.js): Valida el formato del email.
  - [`registrarUsuario`](script.js): Proceso de registro paso a paso.
  - [`login`](script.js): Validación de credenciales y acceso.
  - [`mostrarProductos`](script.js): Muestra la lista y permite agregar productos.
  - [`cargarProducto`](script.js): Permite agregar un producto temporalmente.
  - [`menu`](script.js): Controla el flujo principal del sistema.

- [`db/productos.js`](db/productos.js): Define el array global `productos` con objetos `{ id, nombre, precio }`.

## Ejecución

Solo necesitas abrir [`index.html`](index.html) en tu navegador. El sistema se ejecuta automáticamente y guía al usuario mediante cuadros de diálogo.

## Consideraciones Técnicas

- No utiliza almacenamiento persistente (los datos se pierden al recargar la página).
- La interacción es completamente por cuadros de diálogo.
- El sistema es monousuario y no tiene roles ni seguridad avanzada.
- El código es fácilmente extensible para agregar nuevas funcionalidades.

---

Desarrollado para fines educativos y de práctica de JavaScript básico.