// Función para encontrar el mayor, menor o si son iguales
function compararTresNumeros(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
        console.log("Los tres números son iguales.");
    } else {
        let mayor = num1;
        let menor = num1;

        if (num2 > mayor) mayor = num2;
        if (num3 > mayor) mayor = num3;
        
        if (num2 < menor) menor = num2;
        if (num3 < menor) menor = num3;

        console.log("Mayor: " + mayor);
        console.log("Menor: " + menor);
    }
}

// Ejemplo de uso
compararTresNumeros(3, 5, 7);  // Cambia los números para probar
