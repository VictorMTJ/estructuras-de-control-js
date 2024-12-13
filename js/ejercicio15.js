function calcularCircunferencia() {
    try {
        // Solicitar al usuario el radio de la circunferencia
        const radio = parseFloat(prompt("Ingresa el radio de la circunferencia:"));

        // Validar que el valor ingresado sea un número positivo
        if (isNaN(radio) || radio <= 0) {
            throw new Error("Por favor, ingresa un valor numérico válido y positivo para el radio.");
        }

        // Calcular la longitud (L = 2 * π * r) y el área (A = π * r^2)
        const longitud = 2 * Math.PI * radio;
        const area = Math.PI * Math.pow(radio, 2);

        // Mostrar los resultados
        alert(`La longitud de la circunferencia es: ${longitud.toFixed(2)} unidades`);
        alert(`El área de la circunferencia es: ${area.toFixed(2)} unidades cuadradas`);
    } catch (error) {
        // Manejar excepciones con un mensaje personalizado
        alert(`Error: ${error.message}`);
    }
}

// Llamar a la función para ejecutar el programa
calcularCircunferencia();
