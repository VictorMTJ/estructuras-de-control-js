function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return "El número es par";
    } else {
        return "El número es impar";
    }
}

// Ejemplo de uso:
console.log(verificarParImpar(4)); // "El número es par"
console.log(verificarParImpar(7)); // "El número es impar"
