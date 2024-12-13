function longitudPalabra(palabra) {
    if (palabra.length < 5) {
        return "La palabra es corta";
    } else {
        return "La palabra es larga";
    }
}

// Ejemplo de uso:
console.log(longitudPalabra("hola"));  // "La palabra es corta"
console.log(longitudPalabra("programación"));  // "La palabra es larga"
