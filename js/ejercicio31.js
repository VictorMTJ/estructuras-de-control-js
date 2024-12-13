// Función para calcular la distancia entre dos puntos
function calcularDistancia(x1, y1, x2, y2) {
    // Fórmula de la distancia euclidiana: sqrt((x2 - x1)^2 + (y2 - y1)^2)
    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distancia;
}

// Solicitar al usuario las coordenadas de los dos puntos
const x1 = parseFloat(prompt("Ingresa la coordenada x1 del primer punto:"));
const y1 = parseFloat(prompt("Ingresa la coordenada y1 del primer punto:"));
const x2 = parseFloat(prompt("Ingresa la coordenada x2 del segundo punto:"));
const y2 = parseFloat(prompt("Ingresa la coordenada y2 del segundo punto:"));

// Calcular la distancia entre los dos puntos
const distancia = calcularDistancia(x1, y1, x2, y2);

// Mostrar el resultado
console.log(`La distancia entre los puntos (${x1}, ${y1}) y (${x2}, ${y2}) es: ${distancia.toFixed(2)}`);
