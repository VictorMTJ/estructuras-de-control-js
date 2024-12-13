// Definir las constantes para el valor de la moneda
const valorDolar = 20.50;  // 1 dólar = 20.50 pesos (ejemplo)
const valorEuro = 22.30;   // 1 euro = 22.30 pesos (ejemplo)

// Función para convertir pesos a dólares y euros
function convertirMoneda(pesos) {
    const dolares = pesos / valorDolar;
    const euros = pesos / valorEuro;
    
    // Mostrar el resultado
    console.log(`${pesos} pesos son equivalentes a:`);
    console.log(`${dolares.toFixed(2)} dólares`);
    console.log(`${euros.toFixed(2)} euros`);
}

// Ejemplo de uso
const pesos = 1000; // Monto en pesos a convertir
convertirMoneda(pesos);
