"use strict"
//Función para poner las vocales mayúsculas
function vocalesmay (texto){
    
    let caracteres= texto.split("");
    for(let i=0; i<=caracteres.length-1; i++){
        if(caracteres[i]=="a"|| caracteres[i]=="e"||
        caracteres[i]=="i"||caracteres[i]=="o"||caracteres[i]=="u" )
        caracteres[i] = caracteres [i].toUpperCase();
    }
    return caracteres.join("");
    
}