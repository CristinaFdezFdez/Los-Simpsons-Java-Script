"use strict"
// Capturar elementos del HTML
const texto = document.getElementById("texto");
const cargar = document.getElementById("cargar");
const imagen = document.getElementById("imagen");
const quote = document.getElementById("quote");
const character =  document.getElementById("character")

// Crear un evento al botón "Cargar"
cargar.addEventListener("click",function(){
    carga();
})
// Obtener todos los elementos con la clase "botones"
const botones = document.querySelectorAll(".botones");

// Crearle eventos a los botones con la clase "botones"
for (let boton of botones) {
    boton.addEventListener("click", function () {
        // Llamar a la función "resolver" para hacer operaciones con las cadenas
        texto.value = resolver(boton.value, texto.value)
    })
}

//Capturar y crearle evento al botón "azar"
const azar= document.getElementById("azar");
azar.addEventListener("click", function () {
    texto.value = resolver(botones[aleatorio(1,10)-1].value, texto.value); 
})

//Capturar, crear evento y llamar a la función "empieza"
const empezar = document.getElementById("empezar");
empezar.addEventListener("click",empieza);
//Capturar, crear evento y llamar a la función "para"
const parar = document.getElementById("parar");
empezar.addEventListener("click",para);
//Capturar, crear evento y llamar a la función "masRapido"
const rapido = document.getElementById("rapido");
empezar.addEventListener("click",masRapido);
//Capturar, crear evento y llamar a la función "masLento"
const lento = document.getElementById("lento");
lento.addEventListener("click",masLento);