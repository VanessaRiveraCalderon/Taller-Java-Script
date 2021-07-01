console.log ("Ejercicio2");
const Boton = document.getElementById("Boton");
Boton.addEventListener('click', ()=>{

var numero = document.getElementById("numero").value;
let tabla = tablamult(numero);

function tablamult (numero) {

for (var i = 1; i < 11; i++) {
console.log(numero + " x " + i + " = " +(numero*i));

}
}
 
});

