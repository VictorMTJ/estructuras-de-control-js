// Función para asignar la calificación literal
function asignarCalificacion(calificacion) {
    let calificacionLiteral;

    // Evaluar el rango de calificación y asignar la calificación correspondiente
    if (calificacion >= 9.1 && calificacion <= 10) {
        calificacionLiteral = "A - Excelente";
    } else if (calificacion >= 8.1 && calificacion < 9) {
        calificacionLiteral = "A - Muy bien";
    } else if (calificacion >= 7.5 && calificacion < 8) {
        calificacionLiteral = "A - Bien";
    } else if (calificacion < 7.5) {
        calificacionLiteral = "NA - No Aprobado";
    } else {
        calificacionLiteral = "Calificación fuera de rango";
    }

    // Mostrar el resultado
    console.log("La calificación literal es: " + calificacionLiteral);
}

// Ingresar la calificación numérica
let calificacion = parseFloat(prompt("Ingrese la calificación numérica: "));

// Llamar a la función para asignar la calificación literal
asignarCalificacion(calificacion);
