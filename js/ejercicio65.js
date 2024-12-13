// Solicitar un número entero positivo al usuario
let numero = parseInt(prompt("Ingresa un número entero positivo:"));

// Verificar que el número sea positivo
if (numero > 0) {
    let cuentaAtras = [];
    
    // Recorremos los números desde el número ingresado hasta 0
    for (let i = numero; i >= 0; i--) {
        cuentaAtras.push(i);  // Agregar el número al arreglo
    }
    
    // Mostrar la cuenta atrás separados por coma
    console.log(cuentaAtras.join(', '));
} else {
    console.log("Por favor ingresa un número entero positivo.");
}
