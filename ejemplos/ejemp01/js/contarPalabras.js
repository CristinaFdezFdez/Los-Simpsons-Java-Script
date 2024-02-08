"use strict"

//Función para contar el número de palabras de input "buscar"

function contarPalabras(texto, buscar) {
    if (!texto) {
        return 0;
    }
    let palabras = texto.split(" "); //La cadena de texto se divide en palabras individuales en función de los espacios en blanco
    let count = 0;
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].toLowerCase() === buscar.toLowerCase()) {
            count++;
        }
    }
    return count; //devuelve el número total de veces que la palabra específica aparece en la cadena de texto
}