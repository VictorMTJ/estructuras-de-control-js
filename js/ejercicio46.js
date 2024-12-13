// Función para determinar el mayor de tres números
function mayorDeTres(num1, num2, num3) {
    let mayor;

    if (num1 > num2 && num1 > num3) {
        mayor = num1;
    } else if (num2 > num1 && num2 > num3) {
        mayor = num2;
    } else {
        mayor = num3;
    }

    console.log(`El mayor de los tres números es: ${mayor}`);
}

// Ejemplo de uso
let numero1 = prompt("Introduce el primer número:");
let numero2 = prompt("Introduce el segundo número:");
let numero3 = prompt("Introduce el tercer número:");

// Convertir los valores a números y pasar a la función
mayorDeTres(Number(numero1), Number(numero2), Number(numero3));
