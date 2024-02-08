"use strict"
//Función para poner la última en mayúscula
function ultimay(texto) {

    let palabras = texto.split(" ");
    for (let i = 0; i <= palabras.length - 1; i++) {
        palabras[i] = palabras[i].slice(0, palabras[i].length - 1)
            + palabras[i].charAt(palabras[i].length - 1).toUpperCase();
    }
    return palabras.join(" ");

}