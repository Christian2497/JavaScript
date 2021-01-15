'use strict'

/* 1. Pida 6 numeros por pantalla y lo meta en 1 array 
2. Mostrar el array entero en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice
*/

var numeros = new Array(6);

for(var i; i < 5; i++){
    numeros[i] = parseInt(prompt("Introduce un numero: ", 0));
}

function mostrarArray(elementos, textoCustom = ""){
    document.write("<h1> Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, index,) => {
    document.write("<li>"+elemento+"</li>")
});
    document.write("</ul>")
}

/* Mostrar en Consola */
console.log(numeros)

/* Mostrar en documento */

mostrarArray(numeros)

/* Ordenar y mostrar */
numeros.sort(function(a, b){return a-b});
mostrarArray(numeros, "ordenado")

/* Invertir y mostrar */

numeros.reverse();
mostrarArray(numeros, "revertido")

/* Mostrar cuantos elementos tiene un array */
document.write("<h1> El array tiene "+numeros.length+ "elementos </h1>");

/* Busqueda */

var busqueda = parseInt(prompt("Busca un numero: ", 0));

var posicion = numeros.findIndex( numero => numero == busqueda);

if(posicion && posicion != -1){
    document.write("<h1> ENCONTRADO </h1>");
    document.write("<h1> Posición de la búsqueda: " +posicion+"</h1><hr/>");
}else{
    document.write("<h1> NO ENCONTRADO </h1>")
}