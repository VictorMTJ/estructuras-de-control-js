function dividirNumeros() {
    try {
        const dividendo = prompt("Ingresa el dividendo:");
        const divisor = prompt("Ingresa el divisor:");

        if (!isNumeroValido(dividendo) || !isNumeroValido(divisor)) {
            throw new Error("Debes ingresar valores numéricos.");
        }

        const numDividendo = parseFloat(dividendo);
        const numDivisor = parseFloat(divisor);

        if (numDivisor === 0) {
            throw new Error("El divisor no puede ser cero.");
        }

        const resultado = numDividendo / numDivisor;
        alert(`El resultado de la división es: ${resultado}`);
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}


function isNumeroValido(valor) {
    return !isNaN(valor) && valor.trim() !== "";
}


dividirNumeros();