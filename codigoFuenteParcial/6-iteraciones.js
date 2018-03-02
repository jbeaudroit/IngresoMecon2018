//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var venta;
	var maxventa;
	var minventa;
var flag=0;
var diamax;
var diamin;
//el for toma un valor, marca el maximo al que puede llegay y se le va a ir sumando de a uno en cada iteración
for(var i =1; i<=7;i++)
{
venta=parseFloat(prompt("ingrese el importe de las ventas del día " + (i)+ " : "));
while (venta<=0)
{
venta = parseFloat(prompt("el importe debe ser superior a $0"));

}
//la primera vez ni max ni min van a tener valores, por lo que va a comparar con el flag que va a ser cierto, asi va a 
//entrar a ambos if y cargar el maximo y el minimo, a partir de la segunda vuelta del for, llega al if y compara con un max y un min ya definido, 
//es por eso que al final del min desmiente el flag 
if (venta>maxventa || flag == 0)
{
maxventa= venta;
diamax=i;
}
if (venta<minventa || flag == 0)
{
minventa= venta;
diamin=i
flag = 1
}

}
alert ("la venta mayor fue $" +maxventa+ " en el día "+ diamax + " y la venta menor fue $" + minventa+ " el día " +diamin)
}

