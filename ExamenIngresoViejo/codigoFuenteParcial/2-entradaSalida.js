//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var importe;
var precioFinal;
	
	importe=parseInt(prompt("ingrese el importe"));

precioFinal=importe*1.21;

document.getElementById("importe").value=precioFinal;


}

