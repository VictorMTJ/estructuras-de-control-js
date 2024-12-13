// Función para calcular el promedio de las calificaciones
function calcularPromedio(calificaciones) {
    const suma = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
    return suma / calificaciones.length;
}

// Solicitar al usuario las calificaciones
const calificaciones = [];
for (let i = 1; i <= 4; i++) {
    let calificacion = parseFloat(prompt(`Ingresa la calificación del examen ${i} (de 1 a 5):`));
    
    // Validar que la calificación esté dentro del rango 1 a 5
    while (isNaN(calificacion) || calificacion < 1 || calificacion > 5) {
        calificacion = parseFloat(prompt(`Por favor, ingresa una calificación válida (de 1 a 5) para el examen ${i}:`));
    }
    
    calificaciones.push(calificacion);
}

// Calcular el promedio
const promedio = calcularPromedio(calificaciones);

// Mostrar el resultado
console.log(`El promedio de las calificaciones es: ${promedio.toFixed(2)}`);
