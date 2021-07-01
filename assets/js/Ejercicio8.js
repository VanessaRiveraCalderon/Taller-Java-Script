/*8. Dado una palabra definir si es palíndromo o no*/
console.log ("Ejercicio8");

const Boton8 = document.getElementById("Boton8");
const Rta = document.getElementById("Rta");

Boton8.addEventListener('click', ()=>{
	/*Capturar La Palabra*/
	const texto = document.getElementById("texto");
	let palabra = texto.value;
	/*Convertir La Palabra En Un Arreglo*/
	let palabraArray = palabra.split("");
	/*Conocer El Tamaño Del Vector*/
	let tamaño = palabraArray.length;

	let contador = 0;
	let final = tamaño-1;

	console.log ("Palabra: " + palabra);
	console.log ("tamaño: " + tamaño);
	/*Recorrer El Vector*/
	for (let i=0; i< tamaño; i++){
		//console.log ("["+palabraArray[i]+"]");
		if (palabraArray[i] == palabraArray[final]){
			contador++;
		}
		final--;
	}
	//console.log ("contador: " + contador);
	if (contador == tamaño)
		console.log ("La Palabra Digitada Es Palíndromo");
	  else
		console.log ("La Palabra Digitada No Es Palíndromo");
	
});