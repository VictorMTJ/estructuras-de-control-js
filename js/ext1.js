// Función que recibe dos números y devuelve el mayor
function obtenerMayor(numero1, numero2) {
    if (numero1 > numero2) {
        return numero1;
    } else if (numero2 > numero1) {
        return numero2;
    } else {
        return "Ambos números son iguales.";
    }
}

// Solicitar los números al usuario
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

// Llamar a la función y mostrar el resultado
let mayor = obtenerMayor(num1, num2);
alert("El número mayor es: " + mayor);
