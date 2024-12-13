// Función para calcular la edad de la madre en el momento del parto
function calcularEdadAlDarALuz(añoNacimientoMadre, añoNacimientoHijo) {
    return añoNacimientoHijo - añoNacimientoMadre;
}

// Solicitar al usuario los años de nacimiento
const añoNacimientoMadre = parseInt(prompt("Ingresa el año de nacimiento de la madre:"));
const añoNacimientoHijo = parseInt(prompt("Ingresa el año de nacimiento del hijo:"));

// Validar que el año de nacimiento del hijo sea posterior al de la madre
if (añoNacimientoHijo <= añoNacimientoMadre) {
    console.log("El año de nacimiento del hijo debe ser posterior al de la madre.");
} else {
    // Calcular la edad de la madre en el momento del parto
    const edadMadreAlDarALuz = calcularEdadAlDarALuz(añoNacimientoMadre, añoNacimientoHijo);
    
    // Mostrar el resultado
    console.log(`La madre tenía ${edadMadreAlDarALuz} años cuando dio a luz a su hijo.`);
}
