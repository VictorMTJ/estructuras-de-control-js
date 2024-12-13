function calcularCilindro() {
    try {
        // Solicitar al usuario el radio y la altura
        const radioInput = prompt("Ingresa el radio del cilindro (en metros):");
        const alturaInput = prompt("Ingresa la altura del cilindro (en metros):");

        // Validar que los valores sean números válidos y positivos
        if (!esNumeroValido(radioInput) || !esNumeroValido(alturaInput)) {
            throw new Error("Por favor, ingresa valores numéricos válidos y positivos.");
        }

        // Convertir las entradas a números
        const radio = parseFloat(radioInput);
        const altura = parseFloat(alturaInput);

        // Calcular el área lateral, área total y el volumen
        const areaLateral = 2 * Math.PI * radio * altura;
        const areaTotal = areaLateral + 2 * Math.PI * Math.pow(radio, 2);
        const volumen = Math.PI * Math.pow(radio, 2) * altura;

        // Mostrar los resultados
        alert(`Resultados del cilindro:
        - Área lateral: ${areaLateral.toFixed(2)} m²
        - Área total: ${areaTotal.toFixed(2)} m²
        - Volumen: ${volumen.toFixed(2)} m³`);
    } catch (error) {
        // Manejar excepciones con un mensaje personalizado
        alert(`Error: ${error.message}`);
    }
}

// Función auxiliar para validar que un valor sea numérico y positivo
function esNumeroValido(valor) {
    const numero = parseFloat(valor);
    return !isNaN(numero) && numero > 0;
}

// Llamar a la función para ejecutar el programa
calcularCilindro();
