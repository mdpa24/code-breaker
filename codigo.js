var arr = []; // Arreglo para llenar
var cantidadNumeros = 4; // Cantidad de números en el arreglo
var hasta = 10; // Máximo valor de los números en el arreglo

function llenarAleatorios(a){
var v = Math.floor(Math.random() * hasta);
if(!a.some(function(e){return e == v})){
/** 
 * Si no se encuentra el valor aleatorio en el arreglo
 * se pushea el valor.
 */ 
a.push(v);
}

}

/**
 * Bucle para llenar el arreglo con la cantidad que necesites
 */
while(arr.length < cantidadNumeros && cantidadNumeros < hasta){
    llenarAleatorios(arr);
}   


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
  
arr[0] = getRandomIntInclusive(1,9);



/* console.log(arr);  Descomenta está linea si quieres ver el número a adivinar */




/*********************************************************************** */

function limpiarFormulario() {
    document.getElementById("formulario").reset();
}
const reload = document.getElementById('reload');

reload.addEventListener('click', _ => { 
    location.reload();
});

var playGame = function(){ 
let numero1 = document.getElementById('numero1').value;
let numero2 = document.getElementById('numero2').value;
let numero3 = document.getElementById('numero3').value;
let numero4 = document.getElementById('numero4').value;

let n1=parseInt(numero1)
let n2=parseInt(numero2)
let n3=parseInt(numero3)
let n4=parseInt(numero4)

let a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0;
let asteriscos,guiones;


if (n1 == arr[0]) { a=1}
if (n2 == arr[1]) { b=1}
if (n3 == arr[2]) { c=1}
if (n4 == arr[3]) { d=1}

asteriscos = a+b+c+d;


if (n1 == arr[1]) { e=1; } 
if (n1 == arr[2]) { f=1; }
if (n1 == arr[3]) { g=1; }  

if (n2 == arr[0]) { h=1;}
if (n2 == arr[2]) { i=1;}
if (n2 == arr[3]) { j=1;}

if (n3 == arr[0]) { k=1;} 
if (n3 == arr[1]) { l=1;} 
if (n3 == arr[3]) { m=1;}

if (n4 == arr[0]) { n=1;}
if (n4 == arr[1]) { o=1;} 
if (n4 == arr[2]) { p=1;}



if((n1 == arr[1]) && (n3 == arr[1])) {e=0.5; l=0.5;}
if((n1 == arr[1]) && (n4 == arr[1])) {e=0.5; o=0.5;}
if((n4 == arr[1]) && (n3 == arr[1])) {o=0.5; l=0.5;}


if((n1 == arr[2]) && (n2 == arr[2])) {f=0.5; i=0.5;}
if((n1 == arr[2]) && (n4 == arr[2])) {f=0.5; p=0.5;}
if((n2 == arr[2]) && (n4 == arr[2])) {i=0.5; p=0.5;}

if((n1 == arr[3]) && (n2 == arr[3])) {g=0.5; j=0.5;}
if((n1 == arr[3]) && (n3 == arr[3])) {g=0.5; m=0.5;}
if((n2 == arr[3]) && (n3 == arr[3])) {j=0.5; m=0.5;}

if((n2 == arr[0]) && (n3 == arr[0])) {h=0.5; k=0.5;}
if((n2 == arr[0]) && (n4 == arr[0])) {h=0.5; n=0.5;}
if((n3 == arr[3]) && (n4 == arr[0])) {k=0.5; n=0.5;}

if((n2 == arr[0]) && (n4 == arr[2])) {h=0.5; p=0.5;}
if((n1 == arr[2]) && (n3 == arr[3])) {h=0.5; p=0.5;}



if(a==1){ h=0; k=0; n=0;} 
if(b==1){ e=0; l=0; o=0;}
if(c==1){ f=0; i=0; p=0;}
if(d==1){ g=0; j=0; m=0;}


if(a==1){ e=0; f=0; g=0;} 
if(b==1){ h=0; i=0; j=0;}
if(c==1){ k=0; l=0; m=0;}
if(d==1){ n=0; o=0; p=0;}




guiones = e+f+g+h+i+j+k+l+m+n+o+p;



switch(guiones) {
   
    case 1: 
    switch(asteriscos) {
        
        case 0: console.log(numero1+numero2+numero3+numero4+" -");
        break;
        case 1: console.log(numero1+numero2+numero3+numero4+" -*");
        break;
        case 2: console.log(numero1+numero2+numero3+numero4+" -**");
        break;
        case 3: console.log(numero1+numero2+numero3+numero4+" -***");
        break;
        case 4: console.log(numero1+numero2+numero3+numero4+" -****");
        break;
    }
    break;

    case 2:
    switch(asteriscos) {

        case 0: console.log(numero1+numero2+numero3+numero4+" --");
        break;
        case 1: console.log(numero1+numero2+numero3+numero4+" --*");
        break;
        case 2: console.log(numero1+numero2+numero3+numero4+" --**");
        break;
    }
    break;

    case 3: 
    switch(asteriscos) {

        case 0: console.log(numero1+numero2+numero3+numero4+" ---");
        break;
        case 1: console.log(numero1+numero2+numero3+numero4+" ---*");
        break;
    }
    break;

    case 0: 
    switch(asteriscos) {
   
        case 1: console.log(numero1+numero2+numero3+numero4+" *");
        break;
        case 2: console.log(numero1+numero2+numero3+numero4+" **");
        break;
        case 3: console.log(numero1+numero2+numero3+numero4+" ***");
        break;
        case 4: console.log(numero1+numero2+numero3+numero4+" **** Felicidades!! Adivinaste el número!! ");
        break;
        case 0: console.log(numero1+numero2+numero3+numero4);
        break;
    }
    break;

    case 4: console.log(numero1+numero2+numero3+numero4+" ----");
    break;

        
}



}
