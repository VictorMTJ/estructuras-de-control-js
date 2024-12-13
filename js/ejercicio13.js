function calcularMedia() {
    try {
        // Solicitar al usuario que ingrese 4 números
        const num1 = parseFloat(prompt("Ingresa el primer número:"));
        const num2 = parseFloat(prompt("Ingresa el segundo número:"));
        const num3 = parseFloat(prompt("Ingresa el tercer número:"));
        const num4 = parseFloat(prompt("Ingresa el cuarto número:"));

        // Validar que los valores sean números
        if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
            throw new Error("Por favor, ingresa valores numéricos válidos.");
        }

        // Calcular la media
        const media = (num1 + num2 + num3 + num4) / 4;

        // Mostrar el resultado
        alert(`La media de los números ingresados es: ${media}`);
    } catch (error) {
        // Manejar excepciones con un mensaje personalizado
        alert(`Error: ${error.message}`);
    }
}

// Llamar a la función para ejecutar el programa
calcularMedia();
