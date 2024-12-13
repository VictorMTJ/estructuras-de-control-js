function calcularVelocidad() {
    try {
        // Distancia en metros y tiempo en segundos
        const distancia = 2000; // 2 km = 2000 metros
        const tiempo = 5 * 60;  // 5 minutos = 300 segundos

        // Calcular la velocidad en m/s
        const velocidad = distancia / tiempo;

        // Mostrar el resultado
        alert(`La velocidad del proyectil es: ${velocidad.toFixed(2)} m/s`);
    } catch (error) {
        // Manejar posibles errores
        alert(`Error: ${error.message}`);
    }
}

// Llamar a la función para ejecutar el programa
calcularVelocidad();
