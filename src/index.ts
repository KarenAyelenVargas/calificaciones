let nombre = document.getElementById("dato1");
let practica = document.getElementById("dato2");
let problemas = document.getElementById("dato3");
let teoria = document.getElementById("dato4");
let btnCalcular = document.getElementById("btnCalc");
let suma: number = 0;

btnCalcular.addEventListener("click", () => {
  let nombre: string = String(dato1.value);
  let practica: number = Number(dato2.value);
  let problemas: number = Number(dato3.value);
  let teoria: number = Number(dato4.value);

  console.log("El estudiante es:" + nombre);
  if (practica >= 1 && practica <= 10) {
    practica = practica * 0.1;
    if (problemas >= 1 && problemas <= 10) {
      problemas = problemas * 0.5;
      if (teoria >= 1 && teoria <= 10) {
        teoria = teoria * 0.4;
        suma = practica + problemas + teoria;
        console.log("La nota final del estudiante:" + nombre + "es de:" + suma);
      } else {
        console.log("Hay un error con las notas");
      }
    } else {
      console.log("Hay un error con las notas");
    }
  } else {
    console.log("Hay un error con las notas");
  }
});
