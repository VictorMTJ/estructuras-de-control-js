export function verificarEdad() {

    let edad = prompt("Por favor, ingresa tu edad:");

    if (!/^\d+$/.test(edad) || edad <= 0) {
        alert("Error: Ingresa un número positivo válido.");
        return;
    }

    edad = parseInt(edad);


    if (edad >= 18) {
        alert("Eres mayor de edad.");
    } else {
        alert("Eres menor de edad.");
    }
}


verificarEdad();