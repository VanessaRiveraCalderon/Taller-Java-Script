console.log ("Ejercicio6");

const Boton = document.getElementById("Boton");
const Rta = document.getElementById("Rta");
const Ver = document.getElementById("Ver");
const BotonBuscar = document.getElementById("BotonBuscar");

let nombres = [];
let edades = [];

Boton.addEventListener('click', ()=>{

	let nombre = document.getElementById("nombre").value;
	let edad = parseInt(document.getElementById("edad").value);

	nombres.push(nombre);
	edades.push(edad);
});

Ver.addEventListener('click', ()=>{

	console.log("Vector Nombres");
	for (let i=0; i< nombres.length; i++){
		console.log("["+nombres[i]+"]")
	}

	console.log("Vector Edades");
	for (let i=0; i< edades.length; i++){
		console.log("["+edades[i]+"]")
	}
});

BotonBuscar.addEventListener('click', ()=>{

	let nombreBuscar = document.getElementById("nombreBuscar").value;
	let posicion;
	let existe = false;

	for (let i = 0; i < nombres.length; i++) {
		if (nombres[i] == nombreBuscar){
			posicion=i;
			existe = true;
		}
	}
	if (existe) {
		console.log("El Usuario " + nombres[posicion] + " Si Existe Y Tiene La Edad De " + edades[posicion] + " Años")
	}
	else 
		console.log("El Usuario Ingresado No Existe")




});