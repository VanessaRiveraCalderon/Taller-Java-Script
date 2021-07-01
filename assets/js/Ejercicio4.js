console.log ("Ejercicio4");
const Boton = document.getElementById("Boton");
Boton.addEventListener('click', ()=>{

var numero = document.getElementById("numero").value;
let resultado = esPrimo(numero);
console.log("El número "+numero+ " " +resultado);

function esPrimo (numero) {
	if (numero == 0 || numero == 1 || numero == 4)
		return "No es primo";
	for (let i = 2; i < numero / 2; i++) {
		if (numero % i == 0)
		return "No es primo";
	}
	return "Es primo";
}
 
});
