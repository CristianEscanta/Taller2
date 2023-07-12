function formulario() {
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const correo = document.getElementById("correo");
    const edad = document.getElementById("edad");
    const comentario = document.getElementById("comentario");
    const mensaje = document.getElementById("mensaje1");

    // Validación de campos que no envíen datos vacíos
    if (nombre.value == "" || apellido.value == "" || correo.value == "" || edad.value == "") {
        mensaje.innerHTML = "No se admiten campos vacíos";
        //alert("No se admiten campos vacíos");
        Swal.fire('No se admiten campos vacíos')

      
    } else {
        mensaje.innerHTML = "Formulario enviado correctamente";
         alert("Formulario enviado correctamente");

        
       
        nombre.value = "";
        apellido.value = "";
        correo.value = "";
        edad.value = "";
        comentario.value = "";
    }
}
