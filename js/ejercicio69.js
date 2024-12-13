// Pedir al usuario un número entero
const numero = parseInt(prompt("Ingrese un número entero positivo para la altura del triángulo:"));

if (numero > 0) {
    console.log("Triángulo rectángulo:");
    for (let i = 1; i <= numero; i++) {
        console.log("*".repeat(i)); // Repite el carácter "*" tantas veces como el número de la fila
    }
} else {
    console.log("Por favor, ingrese un número entero positivo.");
}
