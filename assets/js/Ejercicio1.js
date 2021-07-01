console.log ("Ejercicio1");
const Boton = document.getElementById("Boton");
Boton.addEventListener('click', ()=>{

var numero = document.getElementById("numero").value;
let resultado = parImpar(numero);
console.log("El número "+numero+" es "+resultado);

function parImpar(numero) {
  if(numero % 2 == 0) {
    return "par";
  }
  else {
    return "impar";
  }
}
});
