function sumaBinaria(num1, num2) {
    const suma = num1 + num2;  // Sumar los dos números
    return suma.toString(2);    // Convertir la suma a binario y devolver como cadena
}

// Ejemplo de uso:
console.log(sumaBinaria(5, 3));  // "1000" (8 en binario)
console.log(sumaBinaria(7, 2));  // "1001" (9 en binario)
