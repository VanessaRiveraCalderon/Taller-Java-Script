console.log ("Ejercicio3");
let html="";

const tablasMultiplicar = ()=>{

	for (let j=2; j<=9; j++) {
	html+="<div class='tablam'>";
	html+="<table>";
	for (let i = 1; i <= 9; i++) {
		html+="<tr><td> "+j+ " x "+i+ " = "+ j*i+"</td></tr>";
	}
	html+="</table>";
	html+="</div>";
	}
	document.getElementById("contenedorTablas").innerHTML = html;
}

const contenedorTablas = document.getElementById("contenedorTablas");
tablasMultiplicar();


