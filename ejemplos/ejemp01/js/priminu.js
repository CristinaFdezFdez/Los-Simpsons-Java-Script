"use strict"
//Función para poner la primera en minúscula de cada palabra
function priminu (texto){
    
    let palabras= texto.split(" ");
    for(let i=0; i<=palabras.length-1; i++){
        palabras[i] = palabras [i].charAt(0).toLowerCase() + palabras[i].slice(1);
    }
    return palabras.join(" ");
    
}