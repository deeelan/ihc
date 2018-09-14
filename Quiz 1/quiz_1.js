// Pontificia Universidad Javeriana Cali
// Dilan Madhava Chávez Molano
// Diseño de interfaz humano-computador
// 2018 - 2

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function punto1(n) {
	var msg = "Usted tiene" + (age*365).toString() + " en días";
	alert(msg);
}

//-----------------------------------------------------------------------------------

function unidades2string(x) {
	var str = ["un", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", ""];
	for (var i = numeros.length - 1; i >= 0; i--) {
		if(numeros[i] == x)
		{
			return str[i];
		}
	}
}

function decenas2string(x) {
	var str = ["dieci", "venti", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa", ""];
	for (var i = numeros.length - 1; i >= 0; i--) {
		if(numeros[i] == x)
			return str[i];
	}
}

function punto2(n) {
	msg = centenas2string(decenas2string(parseInt(num[1])) + " y " + unidades2string(parseInt(num[2]));
	alert(msg);
	return msg;
}

//-----------------------------------------------------------------------------------

function punto3(n ,p2) {
	var tmp = parseInt(n);
	if(tmp % 2 == 1) {
		return [n, p2]
	}
}

do{
	var num = prompt("Ingrese su edad (0-99):");
}while(num > 1000 || num < 0);

punto1(parseInt(num));
var tmp = punto2(num);
punto3(num, tmp);