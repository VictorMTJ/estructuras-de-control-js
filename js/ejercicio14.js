function calcularAreaTriangulo() {
    try {
        // Solicitar al usuario la base y la altura del triángulo
        const base = parseFloat(prompt("Ingresa la base del triángulo:"));
        const altura = parseFloat(prompt("Ingresa la altura del triángulo:"));

        // Validar que los valores sean números positivos
        if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
            throw new Error("Por favor, ingresa valores numéricos válidos y positivos.");
        }

        // Calcular el área del triángulo
        const area = (base * altura) / 2;

        // Mostrar el resultado
        alert(`El área del triángulo es: ${area}`);
    } catch (error) {
        // Manejar excepciones con un mensaje personalizado
        alert(`Error: ${error.message}`);
    }
}

// Llamar a la función para ejecutar el programa
calcularAreaTriangulo();
