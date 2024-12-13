function calcularVolumenElipsoide() {
    try {
        // Solicitar los semiejes al usuario
        const aInput = prompt("Ingresa el valor del semieje mayor a:");
        const bInput = prompt("Ingresa el valor del semieje b:");
        const cInput = prompt("Ingresa el valor del semieje menor c:");

        // Validar que los valores sean números válidos
        if (!esNumeroValido(aInput) || !esNumeroValido(bInput) || !esNumeroValido(cInput)) {
            throw new Error("Por favor, ingresa valores numéricos válidos.");
        }

        const a = parseFloat(aInput);
        const b = parseFloat(bInput);
        const c = parseFloat(cInput);

        if (a <= 0 || b <= 0 || c <= 0) {
            throw new Error("Los valores de los semiejes deben ser mayores a 0.");
        }

        // Calcular el volumen del elipsoide
        const volumen = (4 / 3) * Math.PI * a * b * c;
        alert(`El volumen del elipsoide es: ${volumen.toFixed(2)} unidades cúbicas.`);
    } catch (error) {
        // Manejar errores
        alert(`Error: ${error.message}`);
    }
}

// Función auxiliar para validar si un valor es numérico
function esNumeroValido(valor) {
    const numero = parseFloat(valor);
    return !isNaN(numero);
}

// Ejecutar la función
calcularVolumenElipsoide();
