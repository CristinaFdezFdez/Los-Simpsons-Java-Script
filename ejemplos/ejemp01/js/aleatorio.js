"use strict"

// Devuelve un número aleatorio entre "inferior" y "superior", incluyendo ambos límites.
function aleatorio(inferior,superior){
    return Math.floor(Math.random() * ((superior+1) - inferior) + inferior);
}