const formulario = document.querySelector(".formulario");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const error = document.createElement("P");
const exito = document.createElement("P");

const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);
formulario.addEventListener("submit", validarFormulario);


function validarFormulario(e) {
    e.preventDefault();

    const {nombre, email, mensaje} = datos

    if (nombre === "" || email === "" || mensaje === "") {
        mostrarError("Todos los campos son obligatorios");
    } else {
        enviarFormulario("Formulario enviado");
    }
}

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
}

function mostrarError(mensaje) {
    if (error.textContent === "") {
        error.textContent = mensaje;
        error.classList.add("error");
        formulario.appendChild(error);
    }

    setTimeout(() => {
            error.remove();
            error.textContent = "";
        }
        , 3000);

}

function enviarFormulario(mensaje) {
    if (exito.textContent === "") {
        exito.textContent = mensaje;
        exito.classList.add("exito");
        formulario.appendChild(exito);
    }

    setTimeout(() => {
            exito.remove();
            exito.textContent = "";
        }
        , 3000);

}
