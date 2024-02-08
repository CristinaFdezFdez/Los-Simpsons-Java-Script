"use strict"

//Función para contar el número de palabras del texto

function contarPalabrasTexto(texto) {
    if (!texto) {
        return 0;
    }
    let palabras = texto.split(/\s+/); //igual a texto.split(" ")
    return palabras.length;
};