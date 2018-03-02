//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
var perimetro;
var totalalambre;

ancho=document.getElementById("ancho").value;

largo=document.getElementById("largo").value;

perimetro= ((ancho*2)+(largo*2));
totalalambre=perimetro*6;

alert ("se necesitan" +totalalambre+ "metros de alambre")

}

