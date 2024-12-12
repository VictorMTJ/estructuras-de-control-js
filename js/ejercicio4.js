function verificarParidad() {
    try {
        const numero = prompt("Por favor, ingresa un número entero:");

        if (!isNumeroEntero(numero)) {
            throw new Error("Debes ingresar un número entero válido.");
        }

        const numeroEntero = parseInt(numero, 10);

        if (numeroEntero % 2 === 0) {
            alert(`El número ${numeroEntero} es par.`);
        } else {
            alert(`El número ${numeroEntero} es impar.`);
        }
    } catch (error) {

        alert(`Error: ${error.message}`);
    }
}

function isNumeroEntero(valor) {
    return /^-?\d+$/.test(valor);
}


verificarParidad();