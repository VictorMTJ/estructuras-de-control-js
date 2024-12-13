// Función para calcular el área de un rectángulo
function calcularAreaRectangulo(lado1, lado2) {
    // Verificar que los lados sean positivos
    if (lado1 <= 0 || lado2 <= 0) {
        console.log("Los lados deben ser positivos.");
        return;
    }

    let areaRectangulo = lado1 * lado2;
    console.log("El área del rectángulo es: " + areaRectangulo);
}

// Función para calcular el área de un triángulo
function calcularAreaTriangulo(base, altura) {
    // Verificar que la base y altura sean positivas
    if (base <= 0 || altura <= 0) {
        console.log("La base y altura deben ser positivas.");
        return;
    }

    let areaTriangulo = (base * altura) / 2;
    console.log("El área del triángulo es: " + areaTriangulo);
}

// Función principal
function calcularArea() {
    let figura = prompt("¿Qué figura desea calcular? (Escriba R para Rectángulo o T para Triángulo): ").toUpperCase();

    if (figura === "R") {
        // Solicitar los lados del rectángulo
        let lado1 = parseFloat(prompt("Ingrese el primer lado del rectángulo: "));
        let lado2 = parseFloat(prompt("Ingrese el segundo lado del rectángulo: "));
        calcularAreaRectangulo(lado1, lado2);
    } else if (figura === "T") {
        // Solicitar la base y altura del triángulo
        let base = parseFloat(prompt("Ingrese la base del triángulo: "));
        let altura = parseFloat(prompt("Ingrese la altura del triángulo: "));
        calcularAreaTriangulo(base, altura);
    } else {
        console.log("Opción no válida. Escriba 'R' para Rectángulo o 'T' para Triángulo.");
    }
}

// Llamar a la función principal
calcularArea();
