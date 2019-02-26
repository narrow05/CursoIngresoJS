/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var uno
    var dos
    var tres
    var suma
    
      uno=document.getElementById("PrecioUno").value;
      dos=document.getElementById("PrecioDos").value;
      tres= document.getElementById("PrecioTres").value;
      uno=parseInt(uno);
      dos=parseInt(dos);
      tres=parseInt(tres);
      suma=uno+dos+tres;
      alert("la suma "+suma)
}
function Promedio () 
{
    var uno
    var dos
    var tres
    var promedio
      uno=document.getElementById("PrecioUno").value;
      dos=document.getElementById("PrecioDos").value;
      tres= document.getElementById("PrecioTres").value;
      uno=parseInt(uno);
      dos=parseInt(dos);
      tres=parseInt(tres);
      promedio=(uno+dos+tres)/3;
      alert("el promedio es "+promedio)
	
}
function PrecioFinal () 
{
    var uno
    var dos
    var tres
    var precio
      uno=document.getElementById("PrecioUno").value;
      dos=document.getElementById("PrecioDos").value;
      tres= document.getElementById("PrecioTres").value;
      uno=parseInt(uno);
      dos=parseInt(dos);
      tres=parseInt(tres);
      precio=(uno+dos+tres)*1.21;
      alert("el promedio es "+precio)
	
}