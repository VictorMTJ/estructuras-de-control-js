// Función para calcular el monto total de la venta
function calcularMontoTotal(cantidadLibros, cantidadCuadernos, cantidadLapiceros) {
    const precioLibro = 10000;   // Precio de un libro
    const precioCuaderno = 7550; // Precio de un cuaderno
    const precioLapicero = 5550; // Precio de un lapicero
    
    // Calcular el monto total
    const total = (cantidadLibros * precioLibro) + (cantidadCuadernos * precioCuaderno) + (cantidadLapiceros * precioLapicero);
    
    return total;
}

// Ejemplo de uso
const cantidadLibros = 5;       // Cantidad de libros vendidos
const cantidadCuadernos = 10;   // Cantidad de cuadernos vendidos
const cantidadLapiceros = 7;    // Cantidad de lapiceros vendidos

// Calcular el monto total
const montoTotal = calcularMontoTotal(cantidadLibros, cantidadCuadernos, cantidadLapiceros);

// Mostrar el monto total
console.log(`El monto total de la venta es: $${montoTotal}`);
