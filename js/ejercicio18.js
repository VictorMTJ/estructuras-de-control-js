function evaluarExpresion() {
    try {
        // Solicitar al usuario los valores de a, b y c
        const aInput = prompt("Ingresa el valor de 'a':");
        const bInput = prompt("Ingresa el valor de 'b':");
        const cInput = prompt("Ingresa el valor de 'c':");

        // Validar que los valores sean números válidos
        if (!esNumeroValido(aInput) || !esNumeroValido(bInput) || !esNumeroValido(cInput)) {
            throw new Error("Por favor, ingresa valores numéricos válidos para 'a', 'b' y 'c'.");
        }

        // Convertir las entradas a números
        const a = parseFloat(aInput);
        const b = parseFloat(bInput);
        const c = parseFloat(cInput);

        // Validar que el denominador no sea cero
        const denominador = b + 2 - a;
        if (denominador === 0) {
            throw new Error("El denominador de la expresión no puede ser cero.");
        }

        // Calcular la expresión: (a + 7 * c) / (b + 2 - a) + 2 * b
        const resultado = (a + 7 * c) / denominador + 2 * b;

        // Mostrar el resultado
        alert(`El resultado de la expresión es: ${resultado.toFixed(2)}`);
    } catch (error) {
        // Manejar excepciones con un mensaje personalizado
        alert(`Error: ${error.message}`);
    }
}

// Función auxiliar para validar que un valor sea numérico
function esNumeroValido(valor) {
    const numero = parseFloat(valor);
    return !isNaN(numero) && valor.trim() !== "";
}

// Llamar a la función para ejecutar el programa
evaluarExpresion();
