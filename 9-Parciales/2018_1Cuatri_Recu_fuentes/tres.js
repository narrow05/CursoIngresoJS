function mostrar()
{   var amigos;
    var precio;
    var total;
    var iva;
    var cadauno;
    amigos=prompt("cantidad de amigos");
    precio=prompt("monto a pagar");
    amigos=parseInt(amigos);
    precio=parseInt(precio);
    total=parseInt(total)
    iva=parseInt(iva)
    cadauno=parseInt(cadauno)
    total=precio*10/100+precio;
    iva=total*1.21;
    cadauno=iva/amigos;
    alert("total con propina "+total+ " total con iva "+ iva+
" cada uno debe pagar "+cadauno )
    

}
