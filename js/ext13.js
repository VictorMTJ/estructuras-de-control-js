function quitarVocales(cadena) {
    return cadena.replace(/[aeiouAEIOU]/g, ''); 
}

// Ejemplo de uso:
console.log(quitarVocales("Hola Mundo"));
console.log(quitarVocales("JavaScript")); 
