// ECMAScript

/*

Instalar Node.js

Extensiones VsCode 
- Quokka.js
- Quokka statusbar buttons
- Bracket Pair Colorizer
- ESLint
- Prettier
- Debugger for Chrome

*/


var nombre = "Facundo";
console.log(nombre);

// Ctrl + Shift + P
// quokka

/* 

Tipos de datos:

string
number
object
boolean
function
symbol
undefined
null

clases son tipo function
null es tipo object
arreglos son objetos

*/

var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25
}

var bandera = true;

function miFuncion(){}

var simbolo = Symbol("mi simbolo");

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(typeof Persona);

var x;          // undefined
var y = null;   // object



// Arrays

var autos = ['BMW', 'Audi'];    // object




//------------------------------------------------------------------------------------------------


// concatenar strings

var nombre = "Juan";
var apellido = "Perez";

var nombreCompleto = nombre + ' ' + apellido;


// concatenar numero a string
// (se evalúa de izquierda a derecha, por lo que se tratan todos como strings)

var x = nombre + 2 + 1 + 9;     // Juan219  

x = nombre + (2 + 4);           // Juan6   prioridad el paréntesis
x = 2 + 4 + nombre;             // 6Juan   de izquierda a derecha



//------------------------------------------------------------------------------------------------




// Variables y constantes

let nombre = "Juan";            // por buena práctica no se usa var

const apellido = "Perez"; 



let nombreCompleto;             // camelCase / No hace falta darle un valor

let x, y;

// Es sensible a mayúsculas y minúsculas
// Se tiene que empezar por una letra, _ o $. 




// Operadores

/*

+
-
*
**
/
%
++
--



+=
-=
*=
/=
%=
**=


*/

// Pre-Incremento y Post-Incremento

let a = 3, b = 2;
let z = a + b;

z = ++a;
console.log(a);     // 4
console.log(z);     // 4

z = b++;
console.log(b);     // 3
console.log(z);     // 2

// Primero b se asigna a z y después se incrementa.


z = --a;
console.log(a);     // 3
console.log(z);     // 3

z = b--;
console.log(b);     // 2
console.log(z);     // 3



/* 

Comparación

==      Compara valores (3 == '3' true)
===     Compara valores y tipos (3 === '3' false)

!=      Distinto (3 != '3' false)
!==     Valor y tipo (3 !== '3' true)

<       (3 < 3 false)
<=      (3 <= 3 true)

>       (3 > 3 false)
>=      (3 >= 3 true)

*/



// Es par?

let x = 10;

if(x%2 == 0){
    console.log("Par");
}
else{
    console.log("Impar");
}



// Lógicos
// AND (&&)
// OR (||)
// NOT (!)


// Operador ternario

let resultado = (3>2) ? "verdadero" : "falso";      // resultado = "verdadero"

let numero = 9;
resultado = (numero%2 == 0) ? "Par" : "Impar";      // resultado = "Impar"





// Conversión string a number

let miNumero = "10";
let edad = Number(miNumero);    // 10


// Pero...

miNumero = "10x";
edad = Number(miNumero);    // NaN (Not a Number)

if(isNaN(edad)){
    console.log("No es un numero");
}
else{
    // Código trabajando con el número
}




// Sentencias de control

// if - else if - else
// switch

switch(numero){
    case 1:
        break;
    case 2:
        break;
    default:
        break;
}

// Switch hace comparaciones estrictas (===)



// Ciclos

// while
// do while
// for

let contador = 0;

while(contador < 3){

    contador++;
}


do{

    contador++;
} while(contador < 3);


for(let contador = 0; contador <= 10; contador++){      // 0, 2, 4, 6, 8, 10

    if(contador % 2 !== 0){
        continue;
    }


    if(x){
        break;
    }
}

// break para salir del ciclo
// continue para saltear iteración


// Label (etiquetas) // no recomendada
/*
inicio:
for(){
    continue inicio;
}
*/


// Arreglos

// Forma antigua  let autos = new Array(''); 

const autos = ["1", "2", "3"];

autos[0];       // "1"
autos[1] = "Dos";
autos.length;

autos.push("Cuatro");
autos[autos.length] = "5";

// Verificar si es un array

typeof autos;       // object

// Con typeof no podemos confirmar que sea un array, pero para eo se puede hacer:

Array.isArray(autos);       // true
autos instanceof Array;     // true



// Funciones

function miFuncion(a, b){
    console.log(arguments.length);      // 2 (a y b)
    return a + b;
}

// Hoisting (se puede declarar la función al final del código y usarla al principio)


// Funciones anónimas / tipo expresión

let sumar = function (a,b){return a + b};
resultado = sumar(1, 2);


// Funciones self-invoking

(function (a, b){
    console.log("Se llama a sí misma, pero no se puede reutilizar: " + (a + b));
})(3, 4);



let miFuncionTexto = miFuncion.toString();



// Arrow functions (Flecha)

const sumarFlecha = (a, b) => a + b;

resultado = sumarFlecha(3, 5);      // 8



// Parámetros y argumentos

let suma = function (a, b){
    console.log(arguments[0]);  // a    // 3
    console.log(arguments[1]);  // b    // undefined
    return a + b;
} 

resultado = sumar(3)                    // NaN



// Si pasamos más argumentos que la cantidad de parámetros definidos no pasa nada, se pueden acceder por arguments[]

let j = function (a, b){
    console.log(arguments[0]);      // 3
    console.log(arguments[1]);      // 6
    console.log(arguments[2]);      // 7

    return a + b;
}

let J = j(3, 6, 7);                 // 9


// Valores por default

let f = function (a = 4, b = 5){

}




// Ejemplo 

resultado = sumarTodo(5, 4, 3, 6, 9);

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}





// Paso por valor y por referencia

// Tipos primitivos - paso por valor (se copia el valor solamente)
let x = 10;

function cambiarValor(a){
    a = 20;
}

cambiarValor(x);    // 10 (no hubo cambio)


// Paso por referencia
const persona = {           // "apunta" a un objeto, por lo que al copiarse no se copia un valor en sí como pasaba en el caso anterior, sino que se copia la referencia de memoria
    nombre: "Juan",
    apellido: "Perez"
}

function cambiarValorObjeto(p1){    // se copia la referencia al lugar en memoria, por lo que sí se puede modificar
    p1.nombre = "Carlos";
    p1.apellido = "Lara";
}

cambiarValorObjeto(persona);        // nombre: "Carlos", apellido: "Lara"





// Objetos en js

let personaA = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(personaA.nombre);

console.log(personaA.nombreCompleto());



let personaB = new Object();
personaB.nombre = "Carlos";
personaB.apellido = "Lara"

console.log(personaB.nombre);
console.log(personaB["apellido"]);



// Recorrer objeto

for(nombrePropiedad in personaA){
    console.log(personaB[nombrePropiedad]);
}



// Agregar propiedades es igual que modificarlas

personaA.tel = "55443322";
delete personaA.tel;



// Concatenar cada valor de cada propiedad
console.log(personaA.nombre + ", " + personaA.apellido); // etc.

// For in
for(nombrePropiedad in personaA){
    console.log(personaB[nombrePropiedad]);
}

// Object values
let personaArray = Object.values(personaA);
console.log(personaArray);

// JSON
let personaString = JSON.stringify(personaA);
console.log(personaString);




// Get y Set

let personaC = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 28,
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(personaC.nombreCompleto);   // es un método, ya no es una función por eso no van ()

console.log(personaC.lang);             // ES

persona.lang = "en";                    // EN       // se usa el set lang






// Constructores

function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

let padre = new Persona("Juan", "Perez", "jperez@gmail.com");
let madre = new Persona("Laura", "Quintero", "lquintero@gmail.com");

padre.nombre = "Carlos";
console.log(madre.nombreCompleto());


Persona.prototype.tel = "44332211";     // se agrega a todos los objetos tipo Persona, con un valor default



// método call

let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, tel){
        return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

// usar nombreCompleto desde persona2 que no lo tiene definido
// call(objeto, argumento1, argumento2)
console.log(persona1.nombreCompleto.call(persona2, "Ing", "5544332211"));


// apply(objeto, arrayArgumentos)
let arrayArgumentos = ["Ing", "5544332211"];
console.log(persona1.nombreCompleto.apply(persona2, arrayArgumentos));


// call -> argumentos por separado
// apply -> un array con todos  




// Clases en js