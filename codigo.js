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



//console.log(arr); //Descomenta esta linea si quieres ver el numero a adivinar




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

let num1=parseInt(numero1)
let num2=parseInt(numero2)
let num3=parseInt(numero3)
let num4=parseInt(numero4)

let nu1 = arr[0]
let nu2 = arr[1]
let nu3 = arr[2]
let nu4 = arr[3]
let asteriscos=0;
let guiones=0;
 
if( num1 == nu1 || num2 == nu2 || num3 == nu3 || num4 == nu4 ) { asteriscos=1 }


if(num1 == nu1 && num2 == nu2) { asteriscos=2 }
if(num1 == nu1 && num4 == nu4) { asteriscos=2 }
if(num2 == nu2 && num3 == nu3) { asteriscos=2 }
if(num1 == nu1 && num3 == nu3) { asteriscos=2 }
if(num3 == nu3 && num4 == nu4) { asteriscos=2 }


if(num1 == nu1 && num2 == nu2 && num3 == nu3 && num1!=num2!=num3 ) { asteriscos=3 }
if(num1 == nu1 && num2 == nu2 && num4 == nu4 && num1!=num2!=num3 ) { asteriscos=3 }
if(num4 == nu4 && num3 == nu3 && num1 == nu1 && num1!=num2!=num3 ) { asteriscos=3 }


if(num1 == nu1 && num2 == nu2 && num3 == nu3 && num4 == nu4 ) { asteriscos=4 }




if((num1 == nu2 || num1 == nu3 || num1 == nu4) && (num1!=nu1 && num2!=nu2 && num3 != nu3 && num4 != nu4)) { guiones=1;}
if((num2 == nu1 || num2 == nu3 || num2 == nu4) && (num1!=nu1 && num2!=nu2 && num3 != nu3 && num4 != nu4)) { guiones=1;}
if((num3 == nu1 || num3 == nu2 || num3 == nu4) && (num1!=nu1 && num2!=nu2 && num3 != nu3 && num4 != nu4)) { guiones=1;}
if((num4 == nu1 || num4 == nu2 || num4 == nu3) && (num1!=nu1 && num2!=nu2 && num3 != nu3 && num4 != nu4)) { guiones=1;}


if(num1 == nu2 && num1 == nu3 ) { guiones=1 ; }
if(num1 == nu2 && num1 == nu4 ) { guiones=1 ; }
if(num1 == nu3 && num1 == nu4 ) { guiones=1 ; }

if(num2 == nu1 && num2 == nu3 ) { guiones=1 ; }
if(num2 == nu1 && num2 == nu4 ) { guiones=1 ; }
if(num2 == nu3 && num2 == nu4 ) { guiones=1 ; }

if(num3 == nu1 && num3 == nu2 ) { guiones=1 ; }
if(num3 == nu1 && num3 == nu4 ) { guiones=1 ; }
if(num3 == nu2 && num3 == nu4 ) { guiones=1 ; }

if(num4 == nu1 && num4 == nu2 ) { guiones=1 ; }
if(num4 == nu1 && num4 == nu3 ) { guiones=1 ; }
if(num4 == nu2 && num4 == nu3 ) { guiones=1 ; }


if((num1==nu3 && num2==nu4) && (num1!=nu1 && num2!=nu2 && num3 != nu3 && num4 != nu4)) { guiones=2 ; }
if((num3==nu1 && num4==nu2) && (num1!=nu1 && num2!=nu2 && num3 != nu3 && num4 != nu4)) { guiones=2 ; }
if((num1==nu2 && num4==nu3) && (num1!=nu1 && num2!=nu2 && num3 != nu3 && num4 != nu4)) { guiones=2 ; }
if((num2==nu1 && num3==nu4) && (num1!=nu1 && num2!=nu2 && num3 != nu3 && num4 != nu4)) { guiones=2 ; }
if((num1==nu2 && num3==nu4) && (num1!=nu1 && num2!=nu2 && num3 != nu3 && num4 != nu4)) { guiones=2 ; }
if((num2==nu1 && num4==nu3) && (num1!=nu1 && num2!=nu2 && num3 != nu3 && num4 != nu4)) { guiones=2 ; }


if(num1==nu2 && num2==nu1) { guiones=2 ; }
if((num1 == nu3 || num2 == nu3) && (num3 == nu2 || num4 == nu3)) { guiones=2 ;}

if(num1==nu1 && num2==nu3 && num3==nu4 && (num1!=nu1 && num2!=nu2 && num3 != nu3 && num4 != nu4)) { guiones=3 ; }
if(num2==nu1 && num3==nu2 && num4==nu3 && (num1!=nu1 && num2!=nu2 && num3 != nu3 && num4 != nu4)) { guiones=3 ; }
if(num1==nu2 && num3==nu1 && num4==nu3 && (num1!=nu1 && num2!=nu2 && num3 != nu3 && num4 != nu4)) { guiones=3 ; }
if(num1==nu2 && num3==nu1 && num4==nu3 && (num1!=nu1 && num2!=nu2 && num3 != nu3 && num4 != nu4)) { guiones=3 ; }
if(num1==nu2 && num2==nu1 && num4==nu3 && (num1!=nu1 && num2!=nu2 && num3 != nu3 && num4 != nu4)) { guiones=3 ; }


if(num1==nu4 && num2==nu3 && num3==nu2 && num4 == nu1) { guiones=4 ; }
if(num1==nu2 && num2==nu1 && num3==nu4 && num4 == nu3) { guiones=4 ; }
if(num1==nu3 && num2==nu4 && num3==nu1 && num4 == nu2) { guiones=4 ; }
if(num1==nu2 && num2==nu3 && num3==nu4 && num4 == nu1) { guiones=4 ; }






switch(asteriscos) {
   
            case 1: 
            switch(guiones) {

                case 0: console.log(numero1+numero2+numero3+numero4+" *");
                break;
                case 1: console.log(numero1+numero2+numero3+numero4+" *-");
                break;
                case 2: console.log(numero1+numero2+numero3+numero4+" *--");
                break;
                case 3: console.log(numero1+numero2+numero3+numero4+" *---");
                break;
            }
            break;
            case 2: 
            switch(guiones) {

                case 0: console.log(numero1+numero2+numero3+numero4+" **");
                break; 
                case 1: console.log(numero1+numero2+numero3+numero4+" **-");
                break;
                case 2: console.log(numero1+numero2+numero3+numero4+" **--");
                break;
            }
            break;
            case 3: 
            switch(guiones) {

                case 0: console.log(numero1+numero2+numero3+numero4+" ***");
                break; 
                case 1: console.log(numero1+numero2+numero3+numero4+" ***-");
                break;
            
            }
            break;
            case 4: console.log(numero1+numero2+numero3+numero4+" **** Felicidades!! Adivinaste el número!! ");
            break;
            case 0:
                switch(guiones) {

                    case 1: console.log(numero1+numero2+numero3+numero4+" -");
                    break;
                    case 2: console.log(numero1+numero2+numero3+numero4+" --");
                    break;
                    case 3: console.log(numero1+numero2+numero3+numero4+" ---");
                    break;
                    case 4: console.log(numero1+numero2+numero3+numero4+" -----");
                    break;
                    case 0: console.log(numero1+numero2+numero3+numero4);
                    break;
                }


}


if(numero1 == "" || numero2 == "" || numero3=="" || numero4 == "" ){   
    console.clear("")
    console.log("Ingresa los 4 dígitos")

}   



}
