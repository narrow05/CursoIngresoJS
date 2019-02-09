/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var uno
    var Dos 
    var suma 
    uno=document.getElementById("numeroUno").value;
    dos=document.getElementById("numeroDos").value;
    uno=parseInt(uno);
    dos=parseInt(dos);
    suma=uno+dos;
    alert("la suma es "+suma);
}

function restar()
{
	var uno
    var Dos 
    var restar 
    uno=document.getElementById("numeroUno").value;
    dos=document.getElementById("numeroDos").value;
    uno=parseInt(uno);
    dos=parseInt(dos);
    restar=uno-dos;
    alert("la resta es "+restar);
}

function multiplicar()
{ 
	var uno
    var Dos 
    var multiplicar 
    uno=document.getElementById("numeroUno").value;
    dos=document.getElementById("numeroDos").value;
    uno=parseInt(uno);
    dos=parseInt(dos);
    multiplicar=uno*dos;
    alert("la multiplicacion  "+multiplicar);
}

function dividir()
{   var uno
    var Dos 
    var dividir 
    uno=document.getElementById("numeroUno").value;
    dos=document.getElementById("numeroDos").value;
    uno=parseInt(uno);
    dos=parseInt(dos);
    dividir=uno/dos;
    alert("la division da "+dividir);
	
}

