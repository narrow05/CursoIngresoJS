
function mostrar()
{
    var mascota1;
    var mascota2;
    var pesomasc1;
    var pesomasc2;
    var sumapesos;
    mascota1=prompt("nombre mascota 1");
    mascota2=prompt("nombre mascota 2");
    pesomasc1=prompt("peso mascota 1");
    pesomasc2=prompt("peso mascota 2");
    pesomasc1=parseInt(pesomasc1);
    pesomasc2=parseInt(pesomasc2);
    sumapesos=pesomasc1+pesomasc2;
    alert("tenes dos mascotas "+ mascota1+" y " +mascota2+" , y que pesan "
+pesomasc1+" y "+pesomasc2+" kilos, la suma de los kilos es "+sumapesos )
    
}
