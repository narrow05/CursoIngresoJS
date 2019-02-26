/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var Temperatura
    var tempCenti
    Temperatura=document.getElementById("Temperatura").value;
    Temperatura=parseInt(Temperatura)
    tempCenti=Temperatura-32
    alert(Temperatura+" Fahrenheit son "+tempCenti+ " centígrados")
}

function CentigradosFahrenheit () 
{
    var Temperatura
    var tempfahre
    Temperatura=document.getElementById("Temperatura").value;
    Temperatura=parseInt(Temperatura)
    tempfahre=Temperatura+32
    alert(Temperatura+" centígrados son "+tempfahre+ " Fahrenheit ")
}
