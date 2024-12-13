// Función para calcular el IVA, subtotal y total de la compra
function calcularCompra(precios) {
    let subtotal = 0;
    let iva;
    let total;

    // Calcular el subtotal sumando los precios de los productos
    for (let i = 0; i < precios.length; i++) {
        subtotal += precios[i];
    }

    // Calcular el IVA (supongamos que el IVA es del 19%)
    iva = subtotal * 0.19;

    // Calcular el total (subtotal + IVA)
    total = subtotal + iva;

    // Mostrar los resultados
    console.log("Subtotal: $" + subtotal);
    console.log("IVA: $" + iva);
    console.log("Total de la compra: $" + total);
}

// Ingresar los precios de los 5 productos
let precios = [];
for (let i = 1; i <= 5; i++) {
    let precio = parseFloat(prompt("Ingrese el precio del producto " + i + ": "));
    precios.push(precio);
}

// Llamar a la función para calcular la compra
calcularCompra(precios);
