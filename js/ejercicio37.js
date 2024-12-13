// Función para calcular el peso total transportado
function calcularPesoTotal(pesoCaja, cantidadCajas) {
    return pesoCaja * cantidadCajas;
}

// Datos
const pesoCaja = 748; // kg
const cantidadCajas = 25;

// Calcular el peso total
const pesoTotal = calcularPesoTotal(pesoCaja, cantidadCajas);

// Mostrar el resultado
console.log(`El camión transporta ${pesoTotal} kg.`);
