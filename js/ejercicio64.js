// Solicitar un número entero positivo al usuario
let numero = parseInt(prompt("Ingresa un número entero positivo:"));

// Verificar que el número sea positivo
if (numero > 0) {
    let impares = [];
    
    // Recorremos los números desde 1 hasta el número ingresado
    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            impares.push(i);  // Agregar el número impar al arreglo
        }
    }
    
    // Mostrar los números impares separados por coma
    console.log(impares.join(', '));
} else {
    console.log("Por favor ingresa un número entero positivo.");
}
