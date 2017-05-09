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