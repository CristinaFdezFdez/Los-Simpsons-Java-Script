"use strict"

//Función para hacer la solicitud a la API

async function solicitud(url) {
    let resultado = await fetch(url);
    return resultado.json();
};