const contrasenaGuardada = "V3142";


function verificarContrasena() {
    let contrasenaIngresada = prompt("Por favor, ingresa la contraseña:");

    if (!/^[a-zA-Z0-9]+$/.test(contrasenaIngresada)) {
        alert("Error: La contraseña solo debe contener caracteres alfanuméricos.");
        return;
    }

    if (contrasenaIngresada.toLowerCase() === contrasenaGuardada.toLowerCase()) {
        alert("¡Contraseña correcta!");
    } else {
        alert("La contraseña es incorrecta.");
    }
}

verificarContrasena();