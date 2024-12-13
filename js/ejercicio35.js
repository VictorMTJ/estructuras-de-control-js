// Cálculo del dinero que tenía originalmente
const precioJuegoLlaves = 11500;
const precioBomba = 1168000;
const precioCajaPernos = 87000;
const cantidadLlaves = 5;
const cantidadCajasPernos = 3;
const dineroSobrante = 91000;

// Cálculo de los costos
const costoLlaves = precioJuegoLlaves * cantidadLlaves;
const costoPernos = precioCajaPernos * cantidadCajasPernos;

// Cálculo del dinero total
const dineroTotal = costoLlaves + costoPernos + precioBomba + dineroSobrante;

console.log(`El dinero que tenía originalmente es: $${dineroTotal}`);
