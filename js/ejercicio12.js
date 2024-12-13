function calcularAreaRectangulo() {
    try {
        // Solicitar al usuario la base y la altura del rectángulo
        const base = parseFloat(prompt("Ingresa la base del rectángulo:"));
        const altura = parseFloat(prompt("Ingresa la altura del rectángulo:"));

        // Validar que los valores sean números positivos
        if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
            throw new Error("Por favor, ingresa valores numéricos válidos y positivos.");
        }

        // Calcular el área del rectángulo
        const area = base * altura;

        // Mostrar el resultado
        alert(`El área del rectángulo es: ${area}`);
    } catch (error) {
        // Manejar excepciones con un mensaje personalizado
        alert(`Error: ${error.message}`);
    }
}

// Llamar a la función para ejecutar el programa
calcularAreaRectangulo();
