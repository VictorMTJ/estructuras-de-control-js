// Función para comprobar la fortaleza de la contraseña
function comprobarContraseña(contraseña) {
    // Expresión regular para verificar los requisitos de la contraseña
    const longitudValida = contraseña.length >= 8 && contraseña.length <= 12;
    const tieneMayuscula = /[A-Z]/.test(contraseña); // Al menos una mayúscula
    const tieneMinuscula = /[a-z]/.test(contraseña); // Al menos una minúscula
    const tieneDigito = /\d/.test(contraseña); // Al menos un dígito

    // Verificamos si todos los requisitos son cumplidos
    if (longitudValida && tieneMayuscula && tieneMinuscula && tieneDigito) {
        return "Contraseña válida y fuerte.";
    } else {
        return "Contraseña débil. Debe tener entre 8 y 12 caracteres, y al menos una mayúscula, una minúscula y un dígito.";
    }
}

// Solicitar al usuario que ingrese una contraseña
const contraseña = prompt("Ingresa tu contraseña:");

// Comprobar la fortaleza de la contraseña
const resultado = comprobarContraseña(contraseña);

// Mostrar el resultado
console.log(resultado);
