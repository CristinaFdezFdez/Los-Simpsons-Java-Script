"use strict"
//Función para poner la primera mayúscula de cada palabra
function primay (texto){
    
    let palabras= texto.split(" ");
    for(let i=0; i<=palabras.length-1; i++){
        palabras[i] = palabras [i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
    return palabras.join(" ");
    
}