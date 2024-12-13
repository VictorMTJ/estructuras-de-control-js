function mayorDeArreglo(arreglo) {
    let max = arreglo[0]; // Asumimos que el primer elemento es el mayor
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > max) {
            max = arreglo[i]; // Actualizamos el valor de max si encontramos un número mayor
        }
    }
    return max;
}

// Ejemplo de uso:
console.log(mayorDeArreglo([3, 5, 7, 2, 8, 1]));  // 8
