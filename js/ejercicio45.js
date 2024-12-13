// Función para verificar si un número es positivo y menor que 100
function esPositivoYMenorQue100(numero) {
    if (numero > 0 && numero < 100) {
        console.log(`${numero} es positivo y menor que 100.`);
    } else {
        console.log(`${numero} no cumple con las condiciones.`);
    }
}

// Ejemplo de uso
esPositivoYMenorQue100(50);  // Ejemplo donde el número es válido
esPositivoYMenorQue100(150); // Ejemplo donde el número no es válido
esPositivoYMenorQue100(-20); // Ejemplo con número negativo
