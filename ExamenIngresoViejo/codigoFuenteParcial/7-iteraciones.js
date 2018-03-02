//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{var nota;
	var sexo;
	var promedio;
	var notabaja;
	var varonesnotamasseis = 0;
	var acumnotas=0;

	for(i=1;i<=6;i++)
	{
		nota=parseFloat(prompt("ingrese la nota"))
		while(nota<0 &&  nota>10)
		{
			nota=parseFloat(prompt("la nota debe estar entre 1 y 10, reingrese nota"))
		}
sexo=prompt("ingrese el sexo f o m")
while(sexo!="f" || sexo!="m")
		{
			sexo=prompt("el sexo debe ser ingresado como f o m")
		}
acumnotas=acumnotas+nota
if( nota < notabaja || i==1)
{
notabaja=nota;
}
if(nota>=6 && sexo == "m")
{
	varonesnotamasseis++;

}
promedio=acumnotas/6
alert("promedio de notas"+promedio.toFixed(2)+ ", la nota mas baja fue" + notabaja+" y la cantidad de varones con nota mayor a 6 fue de" +varonesnotamasseis)
	
}

