function calcularRaices() {
    try {
        // Solicitar coeficientes de la ecuación al usuario
        const aInput = prompt("Ingresa el coeficiente a (debe ser diferente de 0):");
        const bInput = prompt("Ingresa el coeficiente b:");
        const cInput = prompt("Ingresa el coeficiente c:");

        // Validar que los coeficientes sean números válidos
        if (!esNumeroValido(aInput) || !esNumeroValido(bInput) || !esNumeroValido(cInput)) {
            throw new Error("Por favor, ingresa valores numéricos válidos.");
        }

        const a = parseFloat(aInput);
        const b = parseFloat(bInput);
        const c = parseFloat(cInput);

        if (a === 0) {
            throw new Error("El coeficiente 'a' debe ser diferente de 0.");
        }

        // Calcular el discriminante
        const discriminante = Math.pow(b, 2) - 4 * a * c;

        if (discriminante > 0) {
            // Dos raíces reales
            const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
            alert(`Las raíces de la ecuación son reales y diferentes:\nX1 = ${x1}\nX2 = ${x2}`);
        } else if (discriminante === 0) {
            // Una raíz real
            const x = -b / (2 * a);
            alert(`La ecuación tiene una raíz real doble:\nX = ${x}`);
        } else {
            // Raíces complejas
            const real = -b / (2 * a);
            const imaginaria = Math.sqrt(-discriminante) / (2 * a);
            alert(`Las raíces de la ecuación son complejas:\nX1 = ${real} + ${imaginaria}i\nX2 = ${real} - ${imaginaria}i`);
        }
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
calcularRaices();
