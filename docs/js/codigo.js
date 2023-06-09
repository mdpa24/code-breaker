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



//console.log(arr); // <-- Esa linea descomenta si quieres ver el numero a adivinar




/*********************************************************************** */

function limpiarFormulario() {
    document.getElementById("formulario").reset(); 
}
const reload = document.getElementById('reload');



reload.addEventListener('click', _ => { 
    location.reload();
});

var playGame = function(){ 

let numerox = document.getElementById('numerox').value;

let myFunc = num => Number(num);
    
var intArr = Array.from(String(numerox), myFunc);
    


let num1,num2,num3,num4;
let ale1,ale2,ale3,ale4;


num1 = intArr[0]
num2 = intArr[1]
num3 = intArr[2]
num4 = intArr[3]


ale1 = arr[0]
ale2 = arr[1]
ale3 = arr[2]
ale4 = arr[3]


let asteriscos = 0
let guiones = 0

let a,b,c,d,e,f,g,h;


if(num1==ale1){ asteriscos = asteriscos+ 1; a=num1; e=1}  
if(num2==ale2){ asteriscos = asteriscos+ 1; b=num2; f=1}  
if(num3==ale3){ asteriscos = asteriscos+ 1; c=num3; g=1}   
if(num4==ale4){ asteriscos = asteriscos+ 1; d=num4; h=1}  



if((num1==ale2||num1==ale3||num1==ale4) && (a!=num1)&&(b!=num1)&&(c!=num1)&&(d!=num1)){guiones=guiones+1;}
if((num2==ale1||num2==ale3||num2==ale4) && (a!=num2)&&(b!=num2)&&(c!=num2)&&(d!=num2)){guiones=guiones+1;}
if((num3==ale1||num3==ale2||num3==ale4) && (a!=num3)&&(b!=num3)&&(c!=num3)&&(d!=num3)){guiones=guiones+1;}
if((num4==ale1||num4==ale2||num4==ale3) && (a!=num4)&&(b!=num4)&&(c!=num4)&&(d!=num4)){guiones=guiones+1;}




if((num1==num2) && (num1 !=num3) && (num1 != num4) && (num1==ale1||num1==ale2||num1==ale3||num1==ale4) && (guiones>1) && (e!=1) && (f!=1)){guiones=guiones-1};

if((num1==num3) && (num1 !=num2) && (num1 != num4)&& (num1==ale1||num1==ale2||num1==ale3||num1==ale4) && (guiones>1) && (e!=1) && (g!=1)){guiones=guiones-1};

if ((num1==num4) && (num1 !=num2) && (num1 != num3)&& (num1==ale1||num1==ale2||num1==ale3||num1==ale4) && (guiones>1) && (e!=1) && (h!=1) ){guiones=guiones-1}; 

if ((num2==num3) && (num2 !=num1) && (num2 != num4)&& (num2==ale1||num2==ale2||num2==ale3||num2==ale4) && (guiones>1) && (f!=1) && (g!=1)){guiones=guiones-1};

if ((num2==num4) && (num2 !=num1) && (num2 != num3)&& (num2==ale1||num2==ale2||num2==ale3||num2==ale4) && (guiones>1) && (f!=1) && (h!=1)){guiones=guiones-1};

if ((num3==num4) && (num3 !=num1) && (num3 != num2)&& (num3==ale1||num3==ale2||num3==ale3||num3==ale4) && (guiones>1) && (g!=1) && (h!=1)){guiones=guiones-1};


if((num1==num2&&num2==num3) && (num1==ale1||num1==ale2||num1==ale3||num1==ale4) && (guiones>1)){guiones=guiones-2};
if ((num1==num2&&num2==num4) && (num1==ale1||num1==ale2||num1==ale3||num1==ale4) && (guiones>1)){guiones=guiones-2};
if ((num1==num4&&num4==num3)  && (num1==ale1||num1==ale2||num1==ale3||num1==ale4) && (guiones>1)){guiones=guiones-2};
if ((num4==num2&&num2==num3) && (num4==ale1||num4==ale2||num4==ale3||num4==ale4) && (guiones>1)){guiones=guiones-2};



if(num1==num2&&num2==num3&&num3==num4){guiones=0}





switch(asteriscos) {
   
    case 1: 
    switch(guiones) {

        case 0: document.getElementById("resultado").innerHTML = numerox+" *" ;
        break;
        case 1: document.getElementById("resultado").innerHTML = numerox+" *-" ;
        break;
        case 2: document.getElementById("resultado").innerHTML = numerox+" *--" ;
        break;
        case 3: document.getElementById("resultado").innerHTML = numerox+" *---" ;
        break;
    }
    break;
    case 2: 
    switch(guiones) {

        case 0: document.getElementById("resultado").innerHTML = numerox+" **" ;
        break; 
        case 1: document.getElementById("resultado").innerHTML = numerox+" **-" ;
        break;
        case 2: document.getElementById("resultado").innerHTML = numerox+" **--" ;
        break;
    }
    break;
    case 3: 
    switch(guiones) {

        case 0: document.getElementById("resultado").innerHTML = numerox+" ***" ;
        break; 
        case 1: document.getElementById("resultado").innerHTML = numerox+" ***-" ;
        break;
    
    }
    break;
    case 4: document.getElementById("resultado").innerHTML = numerox+ " **** Felicidades!! Adivinaste el número!!" ;
    break;
    case 0:
        switch(guiones) {

            case 1: document.getElementById("resultado").innerHTML = numerox+" -" ;
            break;
            case 2: document.getElementById("resultado").innerHTML = numerox+" --" ;
            break;
            case 3: document.getElementById("resultado").innerHTML = numerox+" ---" ;
            break;
            case 4: document.getElementById("resultado").innerHTML = numerox+" -----" ;
            break;
            case 0: document.getElementById("resultado").innerHTML = numerox;
            break;
        }
      
       
}   
       

}
