// Función para calcular el descuento y el precio final
function calcularDescuento(costo) {
    const descuento = costo * 0.10; // 10% de descuento
    const precioFinal = costo - descuento; // Precio final con descuento
    return { descuento, precioFinal };
}

// Solicitar al usuario el costo del medicamento
const costoMedicamento = parseFloat(prompt("Ingresa el costo del medicamento:"));

// Validar que el costo ingresado sea un número positivo
if (isNaN(costoMedicamento) || costoMedicamento <= 0) {
    console.log("Por favor, ingresa un valor válido para el costo.");
} else {
    const { descuento, precioFinal } = calcularDescuento(costoMedicamento);
    console.log(`Descuento: $${descuento.toFixed(2)}`);
    console.log(`Precio final: $${precioFinal.toFixed(2)}`);
}
