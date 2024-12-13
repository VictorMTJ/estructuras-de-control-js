function piramideDeAsteriscos(filas) {
    for (let i = 1; i <= filas; i++) {
        let espacios = ' '.repeat(filas - i); // Espacios antes de los asteriscos
        let asteriscos = '*'.repeat(2 * i - 1); // Asteriscos en la fila
        console.log(espacios + asteriscos);
    }
}

// Ejemplo de uso:
piramideDeAsteriscos(5);
