"use strict"
//Variable para almacenar el resultado
let resultado;

function resolver(boton,texto){
     // Utiliza una declaración "switch" para determinar qué operación realizar según el botón seleccionado.
    switch(boton){
        case"A-Z":
        resultado = mayusculas (texto);
        break;
        case"a-z":
        resultado = minusculas (texto);
        break;
        case"A_":
        resultado = primay (texto);
        break;
        case"_Z":
        resultado = ultimay (texto);
        break;
        case"a_":
        resultado = priminu(texto);
        break;
        case"_z":
        resultado = ultiminu (texto);
        break;
        case"AEIOU":
        resultado = vocalesmay (texto);
        break;
        case"aeiou":
        resultado = vocalminu (texto);
        break;
        case"ABC":
        resultado = consmay (texto);
        break;
        case"abc":
        resultado = consminu (texto);
        break;
    }
    return resultado;
}