function enviarFormulario() {
    var mensajeAlerta = document.getElementById("mensajeAlerta");
    const inputs = document.getElementsByClassName("form-control");
    
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            mensajeAlerta.classList.add("alert", "alert-danger")
            mensajeAlerta.setAttribute("role", "alert")
            mensajeAlerta.innerHTML = `Ingresar ${inputs[i].name}`
            break
        }
    }
}

$(document).ready( function () {
    $('#myTable').DataTable();
} );

