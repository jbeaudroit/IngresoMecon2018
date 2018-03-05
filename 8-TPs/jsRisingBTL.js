/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 var edad;
 var sexo;
 var estadocivil;
 var sueldo;
 var legajo;
 var nacionalidad;

 edad=parseInt(prompt("ingrese su edad: "));
 while (edad<18 || edad>90)
 {
 	edad=parseInt(prompt("debe ser mayor de 18 y menor de 90 años, reingrese su edad: "));
 }
document.getElementById("Edad").value=edad;

sexo=prompt("ingrese sexo M/F: ")
while (sexo!="M" && sexo!="F")
{
	sexo=prompt("debe consignar su sexo con los caracteres 'F' o 'M': ");
}
document.getElementById("Sexo").value=sexo;

estadocivil=parseInt(prompt("ingrese su estado civil: 1-soltero, 2-casado, 3-divorciado, 4-viudo. "));
while (estadocivil<1 || estadocivil>4 || isNaN(estadocivil) )
{
	estadocivil=parseInt(prompt("el valor ingresado esta por fuera de los valores validos, reingrese: 1-soltero, 2-casado, 3-divorciado, 4-viudo. "));
}
switch (estadocivil)
{
	case 1:
	estadocivil="soltero";
	break;
	case 2:
	estadocivil="casado";
	break;
	case 3:
	estadocivil="divorciado";
	break;
		case 4:
	estadocivil="viudo";
	break;
}
document.getElementById("EstadoCivil").value=estadocivil;

sueldo=parseInt(prompt("ingrese el sueldo bruto percibido: "));
while(sueldo<8000)
{
	sueldo=parseInt(prompt("el sueldo no puede ser menor al SMVyM ($8000), reingrese el sueldo: "));
}
document.getElementById("Sueldo").value=sueldo;

legajo=parseInt(prompt("ingrese su legajo de 4 cifras: "));

while(legajo>9999)
{
legajo=parseInt(prompt("el legajo no puede tener mas de 4 cifras"));
}
document.getElementById("Legajo").value=legajo;

nacionalidad=prompt("ingrese su nacionalidad: A-Argentino, E-extranjero, N-nacionalizado");
while (nacionalidad!="A" && nacionalidad!="E" && nacionalidad!="N")
{
	nacionalidad=prompt("Los valores a ingresar son: A-argentino, E-extranjero, N-nacionalizado");
}
switch (nacionalidad)
{
	case "A":
	nacionalidad="argentino";
	break;
	case "E":
	nacionalidad=="extranjero";
	break;
	case "N":
	nacionalidad=="nacionalizado";
	break;
}
document.getElementById("Nacionalidad").value=nacionalidad;

}
