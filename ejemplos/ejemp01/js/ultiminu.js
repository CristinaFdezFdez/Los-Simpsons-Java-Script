"use strict"
//Función para poner la última minúscula
function ultiminu(texto) {

    let palabras = texto.split(" ");
    for (let i = 0; i <= palabras.length - 1; i++) {
        palabras[i] = palabras[i].slice(0, palabras[i].length - 1)
            + palabras[i].charAt(palabras[i].length - 1).toLowerCase();
    }
    return palabras.join(" ");

}