// Función para calcular el área de un triángulo
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Función para calcular el área de un círculo
function calcularAreaCirculo(radio) {
    const PI = Math.PI; // Definir el valor de PI
    return PI * radio * radio;
}

// Función principal que permite elegir la figura y calcular el área
function calcularArea() {
    // Solicitar al usuario que elija una figura
    let figura = prompt("¿Qué figura desea calcular? (Escriba T para Triángulo o C para Círculo): ").toUpperCase();

    if (figura === "T") {
        // Si es Triángulo, pedir la base y altura
        let base = parseFloat(prompt("Ingrese la base del triángulo: "));
        let altura = parseFloat(prompt("Ingrese la altura del triángulo: "));
        let areaTriangulo = calcularAreaTriangulo(base, altura);
        console.log("El área del triángulo es: " + areaTriangulo);
    } else if (figura === "C") {
        // Si es Círculo, pedir el radio
        let radio = parseFloat(prompt("Ingrese el radio del círculo: "));
        let areaCirculo = calcularAreaCirculo(radio);
        console.log("El área del círculo es: " + areaCirculo);
    } else {
        console.log("Opción no válida. Por favor, ingrese 'T' para Triángulo o 'C' para Círculo.");
    }
}

// Llamar a la función para calcular el área
calcularArea();
