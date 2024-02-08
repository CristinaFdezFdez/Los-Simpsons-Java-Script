"use strict"

//Función para contar el número de consonantes

function contarConsonantes(texto) {
    if (!texto) {
        return 0;
    }
    let numConsonantes = 0;
    for (let i = 0; i < texto.length; i++) {
        let letra = texto.charAt(i).toLowerCase();
        if (/[bcdfghjklmnpqrstvwxyz]/.test(letra))//es una expresión regular que verifica si el carácter actual es una consonante
        {
            numConsonantes++;
        }
    }
    return numConsonantes;
};