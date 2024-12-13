// Función para invertir una frase
function invertirFrase(frase) {
    // Convertir la frase en un arreglo de caracteres, invertirlo y luego unirlo nuevamente en una cadena
    const fraseInvertida = frase.split('').reverse().join('');
    return fraseInvertida;
}

// Ejemplo de uso
const frase = "Soy un programador de Software";  // Puedes cambiar esta frase

// Invertir la frase
const fraseInvertida = invertirFrase(frase);

// Mostrar la frase invertida
console.log("Frase original: " + frase);
console.log("Frase invertida: " + fraseInvertida);
