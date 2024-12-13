function calcularPagoLlamada() {
    try {
        // Solicitar al usuario la duración de la llamada en minutos
        const minutosInput = prompt("Ingresa la duración de la llamada en minutos:");

        // Validar que el valor ingresado sea numérico y positivo
        if (!esNumeroValido(minutosInput)) {
            throw new Error("Por favor, ingresa un valor numérico válido y mayor o igual a 0.");
        }

        const minutos = parseFloat(minutosInput);

        // Definir el costo por minuto e IVA
        const costoPorMinuto = 355;
        const iva = 0.2; // 20%

        // Calcular el costo base y el costo total con IVA
        const costoBase = minutos * costoPorMinuto;
        const costoTotal = costoBase * (1 + iva);

        // Mostrar el resultado al usuario
        alert(`El costo base de la llamada es: $${costoBase.toFixed(2)} pesos.`);
        alert(`El costo total de la llamada con IVA es: $${costoTotal.toFixed(2)} pesos.`);
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
calcularPagoLlamada();
