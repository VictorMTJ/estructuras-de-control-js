function calcularPrecioEntrada() {
    try {
        const edad = prompt("Ingresa tu edad:");

        if (!isNumeroValido(edad)) {
            throw new Error("Por favor, ingresa una edad válida (número entero).");
        }


        const edadCliente = parseInt(edad);

        let precio = 0;

        if (edadCliente < 4) {
            precio = 0; 
        } else if (edadCliente >= 4 && edadCliente <= 18) {
            precio = 5;
        } else if (edadCliente > 18) {
            precio = 10; 
        }


        alert(`El precio de tu entrada es: ${precio}€`);
    } catch (error) {

        alert(`Error: ${error.message}`);
    }
}

function isNumeroValido(valor) {
    return !isNaN(valor) && Number.isInteger(parseFloat(valor)) && valor.trim() !== "";
}


calcularPrecioEntrada();

