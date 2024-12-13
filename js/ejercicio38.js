// Función para calcular la parte que le corresponde a Lorena
function calcularParteLorena() {
    const parteMartín = 2 / 3; // Martín toma 2/3 del total
    const parteJairo = 1 / 4;  // Jairo toma 1/4 del total
    const total = 1;           // El total es 1 (100%)

    // Calcular la parte que le corresponde a Lorena
    const parteLorena = total - (parteMartín + parteJairo);
    return parteLorena;
}

// Calcular y mostrar la parte de Lorena
const parteLorena = calcularParteLorena();
console.log(`A Lorena le corresponde ${parteLorena} del total.`);
