function verificarEdad() {
    let edad = prompt("Por favor, ingresa tu edad:");

    // Validar que sea un número positivo
    if (isNaN(edad) || edad === "" || edad < 0) {
        alert("Por favor, ingresa un número positivo válido.");
    } else {
        // Convertir a número
        edad = parseInt(edad, 10);

        if (edad >= 18) {
            alert("Eres mayor de edad.");
        } else {
            alert("Eres menor de edad.");
        }
    }
}


verificarEdad();