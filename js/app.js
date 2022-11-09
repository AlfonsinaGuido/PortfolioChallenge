import { valida } from "./validacion.js";

const inputs = document.querySelectorAll("input, textarea");

inputs.forEach((input) => {
  //el evento blur se produce cuando el elemento pierde el foco, por ejemplo comprueba si se ha introducido un correo, y en caso contrario muestra un error.
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});
