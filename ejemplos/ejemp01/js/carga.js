"use strict"
// Función que realiza una solicitud a la API de citas de Los Simpsons y muestra los datos en la página.
function carga() {
    let url = "https://thesimpsonsquoteapi.glitch.me/quotes";
    
            fetch(url).then(response => response.json()).then(json => {
                texto.value = json[0].quote;
                character.innerHTML = json[0].character;
                imagen.src = json[0].image;
            
        })
    };