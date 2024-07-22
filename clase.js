// JsBin

// todos los numeros son del tipo number (no existe diferenciación entre int y float)
// todas las palabras son tipo string aunque sea un solo caracter (no existe char)


// Coerción de tipos
/*

Ej:
(10 + "5") -> "105"
(10 == "10") -> true
([] == 0) -> true



(10 + parseInt("5")) -> 15
(10 === "10") -> false



con == hay type coercion (se llevan ambos al mismo tipo de dato)
con === no hay type coercion


undefined == null -> true (ambos se toman como falso)
undefined === null -> false

*/




let year = parseInt(prompt("En que año naciste"));

let edad = 2024 - year;




let nombre = "Uriel";
console.log(nombre.length);

// se puede hacer nombre.length porque se transforma el primitivo string en su equivalente de objeto (type coercion)
// de esta forma permite ejecutar métodos de la clase String

// console no es parte de javascript, sino del entorno, al igual que window 
// (por lo que puede funcionar diferente dependiendo de donde se ejecute)



// Existe una versión de objeto para cada tipo de dato (lo que permite que ejecuten métodos)




// Interpolación (`usando backticks`) 

console.log(`Hola ${nombre}`);

// puede ser multilinea (como si hicieras un \n)

console.log(`Primera
Segunda
Tercera`);

// también puede usarse lógica adentro (expresiones)

console.log(`Eres ${edad >= 18 ? "mayor" : "menor"} de edad`);
console.log(`La suma es ${10 + 10}`)





let nombre = prompt("Nombre: ");
let cal1 = parseInt(prompt("Calificacion 1: "));
let cal2 = parseInt(prompt("Calificacion 2: "));
let cal3 = parseInt(prompt("Calificacion 3: "));

console.log(`Hola ${nombre}, tu promedio es ${(cal1 + cal2 + cal3)/3}`)



// "falsy" y "truthy"
// 0 == false (falsy)
// 4 == true (truthy)





// Ciclos

for(let i = 0; i < 10; i++){

}

// for(;;){} // ciclo infinito

for(let i = 0; i<=100; i = i+3){
    if(i%2 === 0){
        console.log(i);
    }
}



// for - in -> para iterar las propiedades de un objeto

for(let property in user){

}

// for - of -> iterar objetos iterables (string, array, map, set)

for(let caracter of mensaje){

}



// while

// noprotect
let numeroRecibido = 1;
let totalAcumulado = 0;

while(numeroRecibido !== 0){
    numeroRecibido = Number(prompt("Dame un numero"));
    totalAcumulado = totalAcumulado + numeroRecibido;
}
console.log(totalAcumulado);




// do - while
let numeroRecibido;
let totalAcumulado = 0;
do {
    numeroRecibido = Number(prompt("Dame un numero"));
    totalAcumulado = totalAcumulado + numeroRecibido;
} while(numeroRecibido !== 0);

console.log(totalAcumulado);




// noprotect
let numeroMagico = parseInt(Math.random()*100);
let numeroUsuario;
do {
    numeroUsuario = Number(prompt("Dame un numero"));

    if(isNaN(numeroUsuario)){       // no se puede hacer === NaN porque da falso (NaN === NaN -> false) es algo raro del lenguaje (?)
        alert("No es válido");
    } else if(numeroUsuario < 0 || numeroUsuario > 100){
        alert("Fuera de rango");
    } else if(numeroUsuario < numeroMagico){
        alert("El número es mayor");
    } else if(numeroUsuario > numeroMagico){
        alert("El número es menor");
    }else{
        alert("Felicidades");
    }
} while(numeroUsuario !== numeroMagico);





// break
// continue

// noprotect
let numeroMagico = parseInt(Math.random()*100);
let numeroUsuario;

for(;;){
    numeroUsuario = Number(prompt("Dame un numero"));

    if(isNaN(numeroUsuario)){
        alert("No es válido");
    } else if(numeroUsuario < 0 || numeroUsuario > 100){
        alert("Fuera de rango");
    } else if(numeroUsuario < numeroMagico){
        alert("El número es mayor");
    } else if(numeroUsuario > numeroMagico){
        alert("El número es menor");
    }else{
        alert("Felicidades");
        break;
    }
}





// Funciones

// Declaración (tiene hoisting)
function saludar(){
    return;
}


// Expresión (no hoisting)
let saludar = function(){
    return;
}


// Hoisting - todas las funciones declaradas se mueven al inicio al ejecutar el código
// solo para cuando se declara como:  
// function <nombre>(){}



// arrow function (expresion)

let suma = (numero1, numero2) => numero1 + numero2; // retorno implícito al ser de una sola línea
suma(10, 20);



const PAGO_POR_HORA = 10;
const PRECIO_SUSCRIPCION = 13;
let calcularPago = (horas) => horas * PAGO_POR_HORA;
let mesesSuscripcion = (monto) => parseInt(monto/PRECIO_SUSCRIPCION);

let dinero = calcularPago(30);
let mesesPremium = mesesSuscripcion(dinero);

console.log(mesesPremium);





//Parámetros

function sumaTodos(){
    let suma = 0;
    for(let i = 0; i<arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}


// Default

function saludar(nombre, saludo="Hi"){      // va despues el parámetro que tenga valor por default, primero van los que no tienen

}




// Los objetos y arreglos se pasan por referencia (si se modifican en la función queda esa modificación guardada, porque se pasa su dirección de memoria), 
// los otros tipos se pasan por valor (se copia pero no es la misma dirección de memoria, por lo que no afecta la variable)

function modificador(numeros){
    numeros[0] = 25;
}

let edades = [10];
console.log(edades);
modificador(edades);
console.log(edades);





















// Errores

if(isNaN(Number(numero))){
    throw new Error("Envia un numero");
}







