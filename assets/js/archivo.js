
var g_mercurio= 3.7;
var g_venus= 8.8;
var g_saturno= 8.9;
var g_urano= 8.6;
var g_neptuno= 11;
var g_pluton= 0.81; 


var usuario= prompt("¿Cuál es tu peso?");
var planeta= prompt("elige un planeta : 1 es mercurio, 2 es Venus, 3 es marte, 4 es jupiter, 5 es saturno, 6 es Urano, 7 es Neptuno, 8 es Plutón")
var peso = parseInt(usuario);
var g_tierra= 9.8;// quedaría cambiar el prompt por input y agregar las gravedades de mercurio, venus, saturno, urano, neptuno y pluton
var g_marte= 3.7;
var g_jupiter= 24.8;
var pesoFinal;
var nombre;
if(planeta == 1){
  pesoFinal= peso * g_mercurio/g_tierra;
  nombre = "Mercurio";
}
if(planeta == 2) {
  pesoFinal= peso * g_venus/g_tierra;
  nombre = "Venus";
}
if(planeta == 3){
  pesoFinal= peso * g_marte/g_tierra;
  nombre= "Marte";
}
if(planeta == 4){
  pesoFinal= peso * g_jupiter/g_tierra;
  nombre= "Júpiter";
}
if (planeta == 5) {
  pesoFinal= peso * g_saturno/g_tierra;
  nombre= "Saturno";
}
if(planeta == 6){
  pesoFinal= peso * g_urano/g_tierra;
  nombre="Urano"
}
if (planeta == 7) {
  pesoFinal= peso * g_neptuno/g_tierra;
  nombre="Neptuno";
}
if (planeta == 8) {
  pesoFinal= peso * g_pluton/g_tierra;
  nombre="Plutón";
}

pesoFinal= parseInt(pesoFinal)
alert("tu peso en " + nombre + " es : " + pesoFinal + " kilos")

