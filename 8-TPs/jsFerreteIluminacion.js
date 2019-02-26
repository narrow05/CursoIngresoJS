/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var totaliibb=0;
    var total;
    var totalfinal;
    var lamparas=35;
    var cantlamp;
    var Marca;
    cantlamp=document.getElementById("Cantidad").value;
    Marca=document.getElementById("Marca").value;
    cantlamp=parseInt(cantlamp);
        
        if(cantlamp>=6){
         total=35*cantlamp*0.5;
         }
        else{ }
         if(cantlamp==5){
             if(Marca=="ArgentinaLuz"){
             total=lamparas*cantlamp*0.6;
            }
            else {
            total=lamparas*cantlamp*0.7;
            }
        }
        else{}
        if(cantlamp==4){
            if(Marca=="ArgentinaLuz" || Marca== "FelipeLamparas"){
            total=lamparas*cantlamp*0.75;
           }
           else {
           total=lamparas*cantlamp*0.8;
           }
        }
       else{}
       if(cantlamp==3){
            if(Marca=="ArgentinaLuz"){
            total=lamparas*cantlamp*0.85;
            }
            else{}
            if(Marca== "FelipeLamparas"){
            total=lamparas*cantlamp*0.90; 
            }
            else{}
            if(Marca=="JeLuz"||Marca=="HazIluminacion" ||Marca=="Osram"){
                total=lamparas*cantlamp*0.95;
            }
            }
        else{}
        if(cantlamp<=2 && cantlamp>0){
            total=lamparas*cantlamp;
        }
        else{}
 if (total>120){
totaliibb=total*0.10;
totalfinal=total+totaliibb;
alert("IIBB usted pago "+totalfinal+" , siendo "+totaliibb+" el impuesto que se pago");
 }
else{
}
totalfinal=total+totaliibb;     
console.log(totaliibb);
    
 totalfinal=document.getElementById("precioDescuento").value=totalfinal;
 
 
 
}

