/**
 * 
 */

var texto = "";
var simbolos = 0;
var simbolosDeVrd = "";

function funcionNumero(numero) {
	texto += numero;
	document.getElementById("resultado").innerHTML = texto;
}

function funcionSumar(simbolo) {
	simbolosDeVrd = "";
	simbolos = 0;
	texto += simbolo;
	document.getElementById("resultado").innerHTML = texto;
	simbolos = 1;
	simbolosDeVrd = "+";
}

function funcionRestar(simbolo) {
	simbolosDeVrd = "";
	simbolos = 0;
	texto += simbolo;
	document.getElementById("resultado").innerHTML = texto;
	simbolos = 2;
	simbolosDeVrd = "-";
}

function funcionMultiplicar(simbolo) {
	simbolosDeVrd = "";
	simbolos = 0;
	texto += simbolo;
	document.getElementById("resultado").innerHTML = texto;
	simbolos = 3;
	simbolosDeVrd = "*";
}

function funcionDividir(simbolo) {
	simbolosDeVrd = "";
	simbolos = 0;
	texto += simbolo;
	document.getElementById("resultado").innerHTML = texto;
	simbolos = 4;
	simbolosDeVrd = "/";
}

function funcionResultado() {
	var arrayResultado = texto.split(simbolosDeVrd);
	var resultado = 0;

	if (simbolos == 1) {
		resultado = Number(arrayResultado[0]) + Number(arrayResultado[1]);
		document.getElementById("resultado").innerHTML = resultado;
		texto = resultado.toString();
	} else if (simbolos == 2) {
		resultado = Number(arrayResultado[0]) - Number(arrayResultado[1]);
		document.getElementById("resultado").innerHTML = resultado;
		texto = resultado.toString();
	} else if (simbolos == 3) {
		resultado = Number(arrayResultado[0]) * Number(arrayResultado[1]);
		document.getElementById("resultado").innerHTML = resultado;
		texto = resultado.toString();
	} else if (simbolos == 4) {
		resultado = Number(arrayResultado[0]) / Number(arrayResultado[1]);
		document.getElementById("resultado").innerHTML = resultado;
		texto = resultado.toString();
	} else {

	}
}

function borrarCaracter() {
	let arrayParaBorrar = texto.split('');
	arrayParaBorrar.pop();
	texto = arrayParaBorrar.join('');
	document.getElementById("resultado").innerHTML = texto;
}