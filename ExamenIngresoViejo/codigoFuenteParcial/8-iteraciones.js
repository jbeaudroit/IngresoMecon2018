//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*
	var numero;
	var acumulador = 0;
	var contador = 0;
	var seguir;
	var maximo;
	var minimo;
var contPares=0;
var promedio;

do
{
numero=parseInt(prompt("ingrese un numero: "));
while (numero<0 || isNaN(numero))
{
	if (isNaN(numero))
	{
		numero=parseInt(prompt("debe ingresar un numero"))
	}
	else
	{
	numero=parseInt(prompt("el numero debe ser mayor a cero, reingrese numero"));
}
}

if (numero % 2 == 0)
{
	contPares++;
}

acumulador=acumulador+numero;
contador++;

if(contador==1)
{
	maximo=numero;
	minimo=numero;
}

if (numero>maximo)
{
	maximo=numero;
}

if (numero<minimo)
{
	minimo=numero;
}


seguir = prompt("desea continuar?: ");
	}while (seguir =="si");

if (contador==0)
{
	promedio=0;
}
else
{
promedio=acumulador/contador;

}


document.write("La cantidad de numeros pares es; "+contPares+". ")
document.write("El promedio de todos los numeros ingresados es: "+promedio.toFixed(2)+". ")
document.write("la suma de todos los numeros es; "+acumulador+". ")
document.write("el numero maximo es: "+maximo+". ")
document.write("el numero minimo es: "+minimo+". ")

}
*/

//pedir tres numeros por prompt e informar cual es el mayor de los tres
/*
var a;
var b;
var c;
var mayor;




a=parseInt(prompt("ingrese un numero: "));
b=parseInt(prompt("ingrese un numero: "));
c=parseInt(prompt("ingrese un numero: "));

if (a>=b && a>c)
{
	mayor=a;
}

else if (b>=a && b>c)
{
	mayor=b;
}
else
{
	mayor=c;
}

alert("el numero maximo ingresado es "+mayor+". ");
*/
//pedir numeros hasta que la suma de los mismos sea mayor a 100
var numero;
var acumulador=0;

do
{
	numero=parseInt(prompt("ingrese un numero"));
	acumulador=numero+acumulador;

}while(acumulador<=100)




}