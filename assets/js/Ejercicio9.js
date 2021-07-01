var primernumero = parseInt(prompt("Ingrese el primer numero"));
var segundonumero = parseInt(prompt("Ingrese el segundo numero"));
var array = [primernumero, segundonumero];

for (var i = 0; i < 100; i++) {
	var nuevonumero = primernumero + segundonumero;
	array.push(nuevonumero);
	primernumero = segundonumero;
	segundonumero = nuevonumero
}

console.log(array);