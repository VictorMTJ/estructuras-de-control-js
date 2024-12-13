// Solicitar la cantidad a invertir, el interés anual y el número de años
let cantidadInvertir = parseFloat(prompt("Ingresa la cantidad a invertir:"));
let interesAnual = parseFloat(prompt("Ingresa el interés anual (%):"));
let numeroAnios = parseInt(prompt("Ingresa el número de años:"));

// Verificar que los valores ingresados sean válidos
if (cantidadInvertir > 0 && interesAnual > 0 && numeroAnios > 0) {
    // Calcular el capital obtenido cada año
    for (let año = 1; año <= numeroAnios; año++) {
        // Calculamos el capital de cada año sumando el interés
        cantidadInvertir += cantidadInvertir * (interesAnual / 100);
        console.log("Año " + año + ": " + cantidadInvertir.toFixed(2));  // Mostrar el capital con dos decimales
    }
} else {
    console.log("Por favor ingresa valores válidos para la cantidad a invertir, el interés anual y el número de años.");
}
