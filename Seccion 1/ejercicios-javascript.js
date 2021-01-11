"use strict"
/* Ejercicio 1 */
/* Programa que pida dos numeros y que nos diga cual es mayor, el menor y si son iguales */
/* PLUS: Si no son numeros o son menores o iguales a cero, vuelve a pedirlos */

var A = parseInt(prompt("Dime un numero: ", 0));
var B = parseInt(prompt("Dime otro numero: ", 0));

while(A <= 0 || B <= 0 || isNaN(A) || isNaN(B)){
    var A = parseInt(prompt("Dime un numero: ", 0));
    var B = parseInt(prompt("Dime otro numero: ", 0));
}

if(A > B){
    console.log("A es mayor que B")
} else if(B > A){
    console.log("B es mayor que A")
}else{
    console.log("A y B son iguales")
}


/* Ejercicio 2 */
/* Utilizando un bucle, mostrar la suma y la media de los numeros
introducidos hasta introducir un numero negativo y ahi mostrar el resultado*/

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt("Introduce un numero hasta que metas uno negativo: ", 0));
    if (isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma = suma + numero;
        contador++;
    }

    console.log(suma)
    console.log(contador)
} while (numero >= 0);

alert("La suma de todos los numeros es: " + suma)
alert("La media de los numeros es: " + (suma/contador));


/* Ejercicio 3 */
/* Programa que muestre todos los numeros entre 2 numeros 
introducidos por el usuario */

var numero1 = parseInt(prompt("Introduce el primer numero: ", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero: ", 0));

if(numero1 > numero2){
    for(var i = numero2 + 1; i < numero1; i++){
        console.log("Los numeros que hay entre los dos numeros introducidos son: " +i)
    }
} else{
    for(var i = numero1 + 1; i < numero2; i++){
        console.log("Los numeros que hay entre los dos numeros introducidos son: " +i)
    } 
}

/* Ejercicio 4 */
/* Mostrar todos los impares que hay entre dos numeros introducidos
por el usuario */

var numero1 = parseInt(prompt("Introduce el primer numero: ", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero: ", 0));

for(var i = numero1; i <= numero2; i++){
    if(i % 2 != 0){
        console.log("Los numeros impares entre los dos numeros introducidos son: " + i);
    }
}

/* Ejercicio 5 */
/* Muestre todos los numeros divisores de un numero introducido
por el usuario */

var numero = parseInt(prompt("Introduce un numero: ", 1));

for(var i = 1; i <= numero; i++){
    if(numero % i == 0){
        console.log(i + " es divisor de "+ numero );
    }
}

/* Ejercicio 6 */
/* Que nos diga si el numero es par o impar 
1. Ventana prompt
2. Si no es valido que pida el numero de nuevo */

var numero = parseInt(prompt("Introduce un numero: ", 1));

while(isNaN(numero)){
    var numero = parseInt(prompt("Introduce un numero correcto: ", 1));
} 
if(numero % 2 == 0){
    console.log("El numero es par")
} else{
    console.log("El numero es impar")
}


/* Ejercicio 7 */
/* Tabla de multiplicar de un numero introducido por pantalla */

var numero = parseInt(prompt("De que numero quieres la tabla? ", 1));

for(var i = 1; i <= 10; i++){
    console.log(i + " x " + numero + " = " + (i * numero))
}

/* Ejercicio 8 */
/* Calculadora: 
- Que pida dos numeros por pantalla
- Si metemos uno mal que los vuelva a pedir
- En el cuerpo de la pagina, en una alerta y por la consola el resultado
de sumar, restar, multiplicar y dividir esas dos cifras */

var numero1 = parseInt(prompt("Introduce el primer numero: ", 0));
var numero2 = parseInt(prompt("Introduce el segundo numero: ", 0));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Introduce el primer numero: ", 0));
    numero2 = parseInt(prompt("Introduce el segundo numero: ", 0));
}

var resultado = "La suma es: " + (numero1 + numero2) +
                "La resta es: " + (numero1 - numero2) + 
                "La multiplicacion es: " + (numero1 * numero2) +
                "La division es: " + (numero1 / numero2) 
console.log(resultado)