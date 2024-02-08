"use strict"

//Función para invertir el texto

function invertirTexto(texto) {

    let caracteres = texto.split(""); //divide la cadena de texto en una matriz de caracteres individuales
    let caracteresInvertidos = caracteres.reverse(); //invierte el orden de los elementos en la matriz y se almacena en la variable
    let textoInvertido = caracteresInvertidos.join(""); // une los elementos de la matriz en una cadena de texto y los alamacena en la variable texto invertido
    return textoInvertido;
};