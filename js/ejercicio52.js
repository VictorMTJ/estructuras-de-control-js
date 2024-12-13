// Función para calcular el pago de acuerdo al tipo de empleado y horas trabajadas
function calcularPago(tipoEmpleado, horasTrabajadas) {
    let pagoPorHora;

    // Determinar el pago por hora según el tipo de empleado
    if (tipoEmpleado.toLowerCase() === 'planta') {
        pagoPorHora = 20000; // Pago por hora para empleado de planta
    } else if (tipoEmpleado.toLowerCase() === 'administrativo') {
        pagoPorHora = 10000; // Pago por hora para empleado administrativo
    } else {
        console.log("Tipo de empleado no válido");
        return;
    }

    // Calcular el pago total
    let pagoTotal = pagoPorHora * horasTrabajadas;
    console.log(`Pago total: $${pagoTotal}`);
}

// Ingresar el tipo de empleado y las horas trabajadas
let tipoEmpleado = prompt("Ingrese el tipo de empleado (planta o administrativo): ");
let horasTrabajadas = parseInt(prompt("Ingrese el total de horas trabajadas: "), 10);

// Llamar a la función para calcular el pago
calcularPago(tipoEmpleado, horasTrabajadas);
