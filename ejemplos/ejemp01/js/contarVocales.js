"use strict"

//Función para contar el número de vocales

function contarVocales(texto) {
    if (!texto) {
        return 0;
    }
    let numVocales = 0;
    for (let i = 0; i < texto.length; i++) {
        let letra = texto.charAt(i).toLowerCase();
        if (/[aeiouáéíóú]/.test(letra))//La expresión regular busca cualquier carácter que sea una vocal en minúsculas o con tilde
        {
            numVocales++;
        }
    }
    return numVocales;
};