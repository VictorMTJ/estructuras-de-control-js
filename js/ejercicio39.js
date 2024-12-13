// Función para calcular el presupuesto para un cliente
function calcularPresupuesto(area, tarifaPorM2) {
    const costoTotal = area * tarifaPorM2;  // Cálculo del costo total
    return costoTotal;
}

// Datos
const tarifaPorM2 = 10; // Ejemplo de tarifa por metro cuadrado ($10 por m²)

// Entrada de datos
const area = 50;  // Ejemplo: área a pintar (50 m²)

// Calcular el presupuesto
const presupuesto = calcularPresupuesto(area, tarifaPorM2);

// Mostrar el presupuesto
console.log(`El presupuesto para pintar ${area} m² es de $${presupuesto}.`);
