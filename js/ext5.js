function contarSilabas(palabra) {
    const silabas = palabra.match(/[aeiouáéíóú]+/gi); // Busca secuencias de vocales
    return silabas ? silabas.length : 0; // Si encuentra secuencias de vocales, devuelve la cantidad
}

// Ejemplo de uso:
console.log(contarSilabas("programación"));  // 4
console.log(contarSilabas("sol"));          // 1
console.log(contarSilabas("universidad"));  // 5
