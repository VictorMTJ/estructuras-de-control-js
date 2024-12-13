// Función para calcular el volumen del depósito
function calcularVolumenDepósito(radio, altura) {
    const PI = Math.PI; // Usamos la constante PI de Math
    return PI * Math.pow(radio, 2) * altura; // Fórmula: V = PI * (radio^2) * altura
}

// Función para calcular el tiempo de llenado
function calcularTiempoLlenado(caudal, volumen) {
    return volumen / caudal; // Fórmula: t = V / Q
}

// Solicitar al usuario los datos necesarios
const radio = parseFloat(prompt("Ingresa el radio de la base del depósito (en metros):"));
const altura = parseFloat(prompt("Ingresa la altura del depósito (en metros):"));
const caudal = parseFloat(prompt("Ingresa el caudal (en litros por segundo):"));

// Calcular el volumen del depósito en litros (1 m^3 = 1000 litros)
const volumen = calcularVolumenDepósito(radio, altura) * 1000; // Convertir el volumen de m^3 a litros

// Calcular el tiempo estimado en segundos
const tiempoSegundos = calcularTiempoLlenado(caudal, volumen);

// Convertir el tiempo de segundos a minutos
const tiempoMinutos = tiempoSegundos / 60;

// Mostrar los resultados
console.log(`El volumen del depósito es de ${volumen.toFixed(2)} litros.`);
console.log(`El tiempo estimado para llenar el depósito es de ${tiempoMinutos.toFixed(2)} minutos.`);
