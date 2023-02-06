document.addEventListener("DOMContentLoaded", function () {
  iniciarApp();
});

function iniciarApp() {
  navegacionFija();
  scrollNav();
}

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");
const datos = {
  nombre: "",
  telefono: "",
  email: "",
  mensaje: "",
};
const botonTareas = document.querySelector("#boton-tareas");
const listaTareas = document.querySelector("#lista-tareas");
const contenedorExp = document.querySelector("#contenedor-exp");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const { nombre, email, mensaje } = datos;

  if (nombre === "" || email === "" || mensaje === "") {
    mostrarError("Todos los campos son obligatorios");
    return;
  }
  mostrarMensaje("Mensaje enviado correctamente");
  formularioReset();
});
function mostrarError(mensaje) {
  const alerta = document.createElement("p");
  alerta.textContent = mensaje;
  alerta.classList.add("error");

  formulario.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 1500);
}
function mostrarMensaje(mensaje) {
  const alerta = document.createElement("p");
  alerta.textContent = mensaje;
  alerta.classList.add("correcto");
  formulario.appendChild(alerta);

  setTimeout(() => {
    alerta.remove();
  }, 1500);
}
function leerTexto(e) {
  datos[e.target.id] = e.target.value;
}
function formularioReset() {
  datos.nombre = "";
  datos.telefono = "";
  datos.email = "";
  datos.mensaje = "";
  formulario.reset();
}

botonTareas.addEventListener("click", () => {
  listaTareas.classList.toggle("desplegar");
  contenedorExp.classList.toggle("desplegar-height");
  if (listaTareas.classList.contains("desplegar")) {
    botonTareas.innerHTML = chevronsDown;
  } else {
    botonTareas.innerHTML = chevronsUp;
  }
});
const chevronsDown = `
    Mostrar
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-chevrons-down"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#000000"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="7 7 12 12 17 7" />
        <polyline points="7 13 12 18 17 13" />
    </svg>`;
const chevronsUp = `
    Ocultar
    <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-chevrons-up"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#000000"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
    >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <polyline points="7 11 12 6 17 11" />
        <polyline points="7 17 12 12 17 17" />
    </svg>`;

function navegacionFija() {
  const header = document.querySelector(".nav-bg");
  const hero = document.querySelector(".hero");
  const body = document.querySelector("body");

  window.addEventListener("scroll", function () {
    if (hero.getBoundingClientRect().top < 0) {
      header.classList.add("fijo");
      body.classList.add("body-scroll");
    } else {
      header.classList.remove("fijo");
      body.classList.remove("body-scroll");
    }
  });
}

function scrollNav() {
  const enlaces = document.querySelectorAll(".navegacion-principal a");
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();
      const seccionScroll = e.target.attributes.href.value;
      const seccion = document.querySelector(seccionScroll);
      seccion.scrollIntoView({ behavior: "smooth" });
    });
  });
}
