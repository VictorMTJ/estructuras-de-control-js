// Función para realizar la resta si el primer número es mayor que el segundo
function realizarResta(num1, num2) {
    if (num1 > num2) {
        let resultado = num1 - num2;
        console.log("El resultado de la resta es: " + resultado);
    } else {
        console.log("La operación no es posible porque el primer número no es mayor que el segundo.");
    }
}

// Ingresar los dos números
let num1 = parseFloat(prompt("Ingrese el primer número: "));
let num2 = parseFloat(prompt("Ingrese el segundo número: "));

// Llamar a la función para realizar la operación
realizarResta(num1, num2);
