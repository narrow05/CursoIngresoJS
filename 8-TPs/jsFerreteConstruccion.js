/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var Largo;
    var Ancho; 
    var perimetro;
    var alambreTotal;
    Largo=document.getElementById("Largo").value;
    Ancho=document.getElementById("Ancho").value;
    Largo=parseInt(Largo);
    Ancho=parseInt(Ancho);
    perimetro=Largo*2 + Ancho*2;
    alambreTotal=perimetro*3;
    
    alert("el perimetro es "+perimetro+" y la cantidad de alambre a comprar para darle tres vueltas es "+alambreTotal );
}
function Circulo () 
{  
    var Radio;
    var radioTotal;
    var alambreRadio;
    Radio=document.getElementById("Radio").value;
    Radio=parseInt(Radio);
    radioTotal=Radio*2*3.14;
    alambreRadio=radioTotal*3;
    alert("el perimetro del circulo es "+radioTotal+" y la cantidad de alambre a comprar para darle tres vueltas es "+alambreRadio );	
}
function Materiales () 
{
    var Largo;
    var tres;
    var Ancho; 
    var superficie;
    var bolsadecemetoporm2=2;
    var bolsadecalporm2=3;
    Largo=document.getElementById("Largo").value;
    Ancho=document.getElementById("Ancho").value;
    Largo=parseInt(Largo);
    Ancho=parseInt(Ancho);
    superficie=Largo* Ancho;
    bolsadecemetoporm2=superficie/bolsadecemetoporm2;
    bolsadecalporm2=superficie/bolsadecalporm2;
    
    
    alert("La superficie total es "+superficie+ " y se necesitan para hacer un conta piso "+bolsadecemetoporm2+ " bolsas de cemento y "+bolsadecalporm2+" bolsas de cal")

}