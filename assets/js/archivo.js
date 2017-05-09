

var g_mercurio= 3.7;
var g_venus= 8.8;
var g_saturno= 8.9;
var g_urano= 8.6;
var g_neptuno= 11;
var g_pluton= 0.81; 


var usuario= prompt("¿Cuál es tu peso?");

/*var usuario= prompt("¿Cuál es tu peso?");

var planeta= prompt("elige un planeta : 1 es mercurio, 2 es Venus, 3 es marte, 4 es jupiter, 5 es saturno, 6 es Urano, 7 es Neptuno, 8 es Plutón")
var peso = parseInt(usuario);
var g_tierra= 9.8;// quedaría cambiar el prompt por input y agregar las gravedades de mercurio, venus, saturno, urano, neptuno y pluton
var g_marte= 3.7;
var g_jupiter= 24.8;
var pesoFinal;
var nombre;
*/

function calcularPeso(){
  var calcularPeso = document.getElementById("peso").value;
  var elegirPlaneta = document.getElementById("listaPlanetas").value;

  if(elegirPlaneta == "Mercurio"){
    alert("El peso en Mercurio es : " + ((parseInt(calcularPeso *  3.7) / 9.8).toFixed(2)) + " kilos.");
  }

  if(elegirPlaneta == "Venus") {
    alert("El peso en Venus es : " + ((parseInt(calcularPeso *  8.87) / 9.8).toFixed(2)) + " kilos.");
  }
  if(elegirPlaneta == "Marte"){
    alert("El peso en Marte es : " + ((parseInt(calcularPeso *  3.71) / 9.8).toFixed(2)) + " kilos.");
  }
  if(elegirPlaneta == "Jupiter"){
    alert("El peso en Júpiter es : " + ((parseInt(calcularPeso *  24.79) / 9.8).toFixed(2)) + " kilos.");
  }
  if (elegirPlaneta == "Saturno") {
    alert("El peso en Saturno es : " + ((parseInt(calcularPeso *  10.44) / 9.8).toFixed(2)) + " kilos.");
  }
  if(elegirPlaneta == "Urano"){
    alert("El peso en Urano es : " + ((parseInt(calcularPeso *  8.69) / 9.8).toFixed(2)) + " kilos.");
  }
  if (elegirPlaneta == "Neptuno") {
    alert("El peso en Neptuno es : " + ((parseInt(calcularPeso *  11.15) / 9.8).toFixed(2)) + " kilos.");

  }
  if (elegirPlaneta == "Pluton") {
    alert("El peso en Plutón es : " + ((parseInt(calcularPeso *  0.62) / 9.8).toFixed(2)) + " kilos.");
  }

}

/*
pesoFinal= parseInt(pesoFinal)
alert("tu peso en " + nombre + " es : " + pesoFinal + " kilos")
*/

