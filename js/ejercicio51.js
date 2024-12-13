// Función para calcular el pago con posible descuento
function calcularPago(consumo) {
    let descuento = 0;

    // Verificar si el consumo excede los $130,000
    if (consumo > 130000) {
        descuento = 0.15 * consumo; // Aplicar descuento del 15%
        console.log("Descuento aplicado: " + descuento);
    }

    // Calcular el total a pagar (consumo menos descuento)
    let totalPagar = consumo - descuento;
    console.log("Total a pagar: $" + totalPagar);
}

// Ingresar el consumo del cliente
let consumo = parseFloat(prompt("Ingrese el consumo total del cliente en el restaurante: "));

// Llamar a la función para calcular el pago
calcularPago(consumo);
