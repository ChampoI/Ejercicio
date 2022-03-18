
let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
/*
let d = document.getElementById('d');
let e = document.getElementById('e');
let f = document.getElementById('f');
let g = document.getElementById('g');
*/
let calcBtn = document.getElementById('calcBtn');
let resultDisplay = document.getElementById('resultDisplay');
let resultadoAl = document.getElementById("resultadoAl") 

calcBtn.addEventListener('click', calculate);

function calculate(){
 let a1 = a.value;
 let b1 = b.value;
 let c1 = c.value;
 /*
 let d1 = d.value;
 let e1 = d.value;
 let f1 = d.value;
 let g1 = d.value;
 */

 a1 = parseFloat(a1);
 b1 = parseFloat(b1);
 c1 = parseFloat(c1);
 /*
 d1 = parseFloat(d1);
 e1 = parseFloat(e1);
 f1 = parseFloat(f1);
 g1 = parseFloat(g1);
 

   var expresion_una = (Math.sqrt(
                                    (1**a) + ((g * f )/(2)) - (-Math.cos(c * a))
                        ));
   var expresion_dos = (Math.sin(
                                    b*a
                        )
                        );
   var expresion_tres = (Math.sqrt(
                                    (a**(2-d))+e*a
                        ));
   resul_ecuacion =     (((expresion_una)/(expresion_dos))+expresion_tres) ;
   console.log("El resultado de la ecuacion es + " );
   return  resul_ecuacion =  (((expresion_una)/(expresion_dos))+expresion_tres) 
 */

 let bPower = Math.pow(b1, 2);
 let fourAC = (4 * a1 * c1);
 let resultToBeSquared = bPower - fourAC;
 let squareRoot = Math.sqrt(resultToBeSquared);
 let bottomOfEquation = (2 * a1);

 if (isNaN(squareRoot) === true){
 resultDisplay.innerHTML = 'Impossible to solve';
    }
 else {
    let result1 = (-b1 - squareRoot) / bottomOfEquation;
    let result2 = (-b1 + squareRoot) / bottomOfEquation;
    resultDisplay.innerHTML = "Puntos De Corte en = " + result1 + " y en " + result2;
    }

}


