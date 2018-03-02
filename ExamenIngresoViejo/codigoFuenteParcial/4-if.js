//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1;
	var numero2;
	var resultado;

	numero1=prompt("ingrese el primer número");
	numero2=prompt("ingrese el segundo número");

	if (numero1==numero2)
	{
		resultado=numero1 + numero2;
		
	}	
	
	else if (parseInt(numero1)>parseInt(numero2)) 
	{
		numero1=parseInt(numero1);
		numero2=parseInt(numero1);
		resultado=numero1-numero2;
		
	}
	
	else
	{
		numero1=parseInt(numero1);
		numero2=parseInt(numero1);
		resultado=numero1+numero2;
		
	}
document.write("el resultado es "+resultado)

}

