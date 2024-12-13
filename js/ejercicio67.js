// Pedir al usuario un número entero
let altura = parseInt(prompt("Introduce la altura del triángulo (un número entero positivo):"));

// Validar que el número sea positivo
if (altura > 0) {
    let triangulo = ""; // Variable para construir el triángulo
    for (let i = 1; i <= altura; i++) {
        // Agregar '*' i veces en cada fila
        triangulo += "*".repeat(i) + "\n";
    }
    console.log(triangulo); // Mostrar el triángulo en la consola
} else {
    console.log("Por favor introduce un número entero positivo.");
}
