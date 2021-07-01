console.log ("Ejercicio 5");

const boton = document.getElementById('boton');
const ver = document.getElementById('ver');

let edades = [];

const mostrarArreglo = () =>{
	for (edad of edades)
		console.log ("["+edades+"]");
}

boton.addEventListener('click', ()=> {
	let texto = document.getElementById("texto");
	let edad = parseInt(texto.value);

	edades.push(edad);
})

ver.addEventListener('click', ()=> {
	let temporal;
	let tamaño = edades.length;

	for (let vuelta = 1; vuelta <= tamaño; vuelta++) {
		for (let i = 0; i < tamaño -vuelta; i++) {
			if (edades[i] < edades[i+1]) {
				temporal = edades[i];
				edades[i] = edades[i+1];
				edades[i+1] = temporal
			}
		}
	}

	mostrarArreglo();
})