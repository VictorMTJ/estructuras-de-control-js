// Solicitar un número al usuario
const numero = parseInt(prompt("Ingrese un número entero positivo:"), 10);

// Función para verificar si un número es primo
function esPrimo(n) {
    if (n <= 1) return false; // Los números menores o iguales a 1 no son primos
    for (let i = 2; i <= Math.sqrt(n); i++) { // Comprobar divisores hasta la raíz cuadrada
        if (n % i === 0) return false; // Si tiene divisor, no es primo
    }
    return true; // Si no tiene divisores, es primo
}

// Validar el número y mostrar el resultado
if (isNaN(numero) || numero < 0) {
    console.log("Por favor, ingrese un número entero positivo.");
} else {
    if (esPrimo(numero)) {
        console.log(`El número ${numero} es primo.`);
    } else {
        console.log(`El número ${numero} no es primo.`);
    }
}
