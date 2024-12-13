function validarPin(pin) {
    const regex = /^[0-9]{4}$|^[0-9]{6}$/;
    return regex.test(pin); // Devuelve true si el PIN es válido, false si no lo es
}

// Ejemplo de uso:
console.log(validarPin("1234"));  // true
console.log(validarPin("12345")); // false
console.log(validarPin("123456")); // true
console.log(validarPin("abcd"));  // false
