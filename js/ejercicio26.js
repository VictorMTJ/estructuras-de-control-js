// Función para convertir de grados centígrados a Fahrenheit
function convertirACentigrados(centigrados) {
    // Fórmula de conversión: F = (C * 9/5) + 32
    const fahrenheit = (centigrados * 9/5) + 32;
    return fahrenheit;
}

// Solicitar al usuario ingresar temperatura en grados centígrados
const gradosCentigrados = parseFloat(prompt("Ingresa la temperatura en grados Centígrados:"));

// Validar que el valor ingresado sea un número
if (isNaN(gradosCentigrados)) {
    console.log("Por favor, ingresa un número válido.");
} else {
    // Realizar la conversión
    const gradosFahrenheit = convertirACentigrados(gradosCentigrados);

    // Mostrar el resultado en consola
    console.log(`${gradosCentigrados}°C es igual a ${gradosFahrenheit.toFixed(2)}°F`);
}
