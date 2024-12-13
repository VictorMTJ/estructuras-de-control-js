// Función para calcular el promedio final
function calcularPromedioFinal(parciales, examenFinal, trabajoFinal) {
    // Calculamos el promedio de los tres parciales
    const promedioParciales = (parciales[0] + parciales[1] + parciales[2]) / 3;

    // Calculamos el promedio final con los pesos correspondientes
    const promedioFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);

    return promedioFinal;
}

// Solicitar al usuario las calificaciones
const parciales = [
    parseFloat(prompt("Ingresa la calificación del primer parcial:")),
    parseFloat(prompt("Ingresa la calificación del segundo parcial:")),
    parseFloat(prompt("Ingresa la calificación del tercer parcial:"))
];

const examenFinal = parseFloat(prompt("Ingresa la calificación del examen final:"));
const trabajoFinal = parseFloat(prompt("Ingresa la calificación del trabajo final:"));

// Validar que las calificaciones sean números válidos
if (parciales.some(calificacion => isNaN(calificacion)) || isNaN(examenFinal) || isNaN(trabajoFinal)) {
    console.log("Por favor, ingresa calificaciones válidas.");
} else {
    // Calcular el promedio final
    const promedioFinal = calcularPromedioFinal(parciales, examenFinal, trabajoFinal);

    // Mostrar el resultado
    console.log(`El promedio final es: ${promedioFinal.toFixed(2)}`);
}
