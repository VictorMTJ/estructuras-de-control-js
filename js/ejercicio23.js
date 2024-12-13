function convertirVelocidad() {
    try {
        // Solicitar al usuario la velocidad en kilómetros por hora
        const velocidadKmHInput = prompt("Ingresa la velocidad del automóvil en km/h:");

        // Validar que el valor ingresado sea numérico y positivo
        if (!esNumeroValido(velocidadKmHInput)) {
            throw new Error("Por favor, ingresa un valor numérico válido y mayor o igual a 0.");
        }

        const velocidadKmH = parseFloat(velocidadKmHInput);

        // Convertir la velocidad a metros por segundo
        const velocidadMs = velocidadKmH * (1000 / 3600);

        // Mostrar el resultado al usuario
        alert(`La velocidad del automóvil en m/s es: ${velocidadMs.toFixed(2)} metros por segundo.`);
    } catch (error) {
        // Manejar errores
        alert(`Error: ${error.message}`);
    }
}

// Función auxiliar para validar si un valor es numérico
function esNumeroValido(valor) {
    const numero = parseFloat(valor);
    return !isNaN(numero) && numero >= 0;
}

// Ejecutar la función
convertirVelocidad();
