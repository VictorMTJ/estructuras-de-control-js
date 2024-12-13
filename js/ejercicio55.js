// Función para calcular el precio con descuento según el tipo de membresía
function calcularPrecioConDescuento(precioOriginal, tipoMembresia) {
    let descuento;
    let precioFinal;

    // Determinar el descuento según el tipo de membresía
    switch (tipoMembresia) {
        case 'A':
            descuento = 0.10;  // 10% descuento
            break;
        case 'B':
            descuento = 0.15;  // 15% descuento
            break;
        case 'C':
            descuento = 0.20;  // 20% descuento
            break;
        default:
            console.log("Tipo de membresía no válido.");
            return;
    }

    // Calcular el precio final con el descuento
    precioFinal = precioOriginal - (precioOriginal * descuento);
    
    // Mostrar el precio final
    console.log("Precio final con descuento: $" + precioFinal.toFixed(2));
}

// Ingresar el precio original de la compra y el tipo de membresía
let precioOriginal = parseFloat(prompt("Ingrese el precio original de la compra: "));
let tipoMembresia = prompt("Ingrese el tipo de membresía (A, B, C): ").toUpperCase();

// Llamar a la función para calcular el precio con descuento
calcularPrecioConDescuento(precioOriginal, tipoMembresia);
