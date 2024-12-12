function verificarTributacion() {
    try {
        const edad = prompt("Ingresa tu edad:");

        if (!isNumeroEntero(edad) || parseInt(edad, 10) < 0) {
            throw new Error("Por favor, ingresa una edad válida (número entero positivo).");
        }

        const ingresos = prompt("Ingresa tus ingresos mensuales:");

        if (!isNumeroValido(ingresos) || parseFloat(ingresos) < 0) {
            throw new Error("Por favor, ingresa un valor válido para los ingresos.");
        }

        const edadNumerica = parseInt(edad, 10);
        const ingresosNumericos = parseFloat(ingresos);

        if (edadNumerica > 16 && ingresosNumericos >= 1000) {
            alert("Debes tributar.");
        } else {
            alert("No debes tributar.");
        }
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

function isNumeroEntero(valor) {
    return /^-?\d+$/.test(valor); 
}


function isNumeroValido(valor) {
    return !isNaN(valor) && valor.trim() !== ""; 
}


verificarTributacion();