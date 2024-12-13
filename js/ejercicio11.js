function realizarOperaciones() {
    try {
        // Solicitar al usuario dos números
        const numero1 = parseFloat(prompt("Ingresa el primer número:"));
        const numero2 = parseFloat(prompt("Ingresa el segundo número:"));

        // Validar que los números sean válidos
        if (isNaN(numero1) || isNaN(numero2)) {
            throw new Error("Por favor, ingresa valores numéricos válidos.");
        }

        // Realizar las operaciones
        const suma = numero1 + numero2;
        const resta = numero1 - numero2;
        const multiplicacion = numero1 * numero2;
        let division = "No se puede dividir por cero";  // Mensaje por defecto

        // Verificar si el divisor no es cero antes de realizar la división
        if (numero2 !== 0) {
            division = numero1 / numero2;
        }

        // Mostrar los resultados de las operaciones
        alert(`Resultados:
        Suma: ${suma}
        Resta: ${resta}
        Multiplicación: ${multiplicacion}
        División: ${division}`);
    } catch (error) {
        // Manejar excepciones con un mensaje personalizado
        alert(`Error: ${error.message}`);
    }
}

// Llamar a la función para ejecutar el programa
realizarOperaciones();
