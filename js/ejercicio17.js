function calcularVolumenEsfera() {
    try {
        // Solicitar el radio al usuario
        const radio = parseFloat(prompt("Ingresa el radio de la esfera:"));

        // Validar que el radio sea un número positivo
        if (isNaN(radio) || radio <= 0) {
            throw new Error("Por favor, ingresa un valor numérico válido y positivo para el radio.");
        }

        // Calcular el volumen de la esfera (V = 4/3 * π * r^3)
        const volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);

        // Mostrar el resultado
        alert(`El volumen de la esfera es: ${volumen.toFixed(2)} unidades cúbicas`);
    } catch (error) {
        // Manejar excepciones con un mensaje personalizado
        alert(`Error: ${error.message}`);
    }
}

// Llamar a la función para ejecutar el programa
calcularVolumenEsfera();
