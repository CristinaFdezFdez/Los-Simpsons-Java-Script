"use strict"

//Función para conocer el texto es palindromo

function esPalindromo(texto) {

    let textoLimpio = texto.replace(/[^a-zA-Z]/g, "").toLowerCase();//reemplaza todos los caracteres no alfabéticos con una cadena vacia
    let textoInvertido = textoLimpio.split("").reverse().join("");//invierte el orden de los elementos en la matriz y luego lo une en cadena               
    return textoLimpio === textoInvertido;
}