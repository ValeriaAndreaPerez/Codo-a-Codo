function validacion () {

    valor = document.getElementsById("inputEmail4").value;

    if (valor == null || valor.length == 0) 
    {
        document.getElementsById("mensaje").innerHTML = "Completar el email"  
        elemento = document.getElementById("inputEmail4");
        elemento.focus();
        return false;

    }
    return true;

}

validacion();