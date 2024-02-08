"use strict"
//Declaración de variables
let repite;
let tiempo = 2000;
let lapso = 500;
// Función que simula hacer clic en el botón "Azar."
function pulsarAzar(){
    azar.click();
}
// Función que inicia la operación automática a una velocidad constante.
function empieza(){
    repite= setInterval(pulsarAzar,tiempo);
}
//Función que para la operación automática
function para(){
    clearInterval(repite);
}
//Función que hace que vaya más rápido
function masRapido(){
    clearInterval(repite);
    tiempo = tiempo - lapso;
    repite = setInterval(pulsarAzar, tiempo);
}
//Función que hace que vaya más lento
function masLento(){
    clearInterval(repite);
    tiempo = tiempo + lapso;
    repite = setInterval(pulsarAzar, tiempo);
}



