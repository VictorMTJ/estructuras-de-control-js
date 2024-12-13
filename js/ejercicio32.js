// Función para calcular el precio después de un descuento
function calcularPrecioConDescuento(precio, descuento) {
    return precio - (precio * descuento / 100);
}

// Solicitar los precios de los 5 productos
const precios = [];
for (let i = 1; i <= 5; i++) {
    precios.push(parseFloat(prompt(`Ingresa el precio del producto ${i}:`)));
}

// Aplicar los descuentos
const descuentos = [5, 5, 2, 2, 0]; // 5% para los primeros 2 productos, 2% para los últimos 2, ninguno para el 5to
let totalCompra = 0;

// Calcular el precio con descuento para cada producto
const preciosConDescuento = precios.map((precio, index) => {
    const descuento = descuentos[index];
    const precioConDescuento = calcularPrecioConDescuento(precio, descuento);
    totalCompra += precioConDescuento; // Sumar al total de la compra
    return precioConDescuento;
});

// Mostrar el precio a pagar por cada producto y el total
preciosConDescuento.forEach((precio, index) => {
    console.log(`Producto ${index + 1}: Precio con descuento: $${precio.toFixed(2)}`);
});
console.log(`Total a pagar: $${totalCompra.toFixed(2)}`);
