function calcularImpuesto() {
    try {
        const renta = prompt("Ingresa tu renta anual:");

        if (!isNumeroValido(renta) || parseFloat(renta) < 0) {
            throw new Error("Por favor, ingresa una renta válida (número positivo).");
        }

        const rentaAnual = parseFloat(renta);

        let tipoImpositivo;

        if (rentaAnual >= 10000 && rentaAnual < 20000) {
            tipoImpositivo = "5%";
        } else if (rentaAnual >= 20000 && rentaAnual < 35000) {
            tipoImpositivo = "10%";
        } else if (rentaAnual >= 35000 && rentaAnual < 60000) {
            tipoImpositivo = "20%";
        } else if (rentaAnual >= 60000) {
            tipoImpositivo = "45%";
        } else {
            tipoImpositivo = "No aplicable"; 
        }


        alert(`Tu tipo impositivo es: ${tipoImpositivo}`);
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

function isNumeroValido(valor) {
    return !isNaN(valor) && valor.trim() !== ""; 
}


calcularImpuesto();

