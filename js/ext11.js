function sumarNumerosPositivos(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            suma += numeros[i]; // Sumamos solo los números positivos
        }
    }
    return suma; // Si no hay números positivos, suma será 0
}

// Ejemplo de uso:
console.log(sumarNumerosPositivos([1, -2, 3, -4, 5]));  // 9
console.log(sumarNumerosPositivos([-1, -2, -3, -4]));   // 0
