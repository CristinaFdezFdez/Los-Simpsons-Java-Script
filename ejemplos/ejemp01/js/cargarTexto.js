"use strict"

//Función asíncrona que coge datos de la API y los muestra

async function cargarTexto() {
    let url = `https://chiquitadas.es/api/quotes/avoleorrr`;
    const resultado = await solicitud(url);
    mostrar(resultado);
};



