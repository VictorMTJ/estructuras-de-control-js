// Función para calcular el sueldo
function calcularSueldo(horasTrabajo, pagoPorHora) {
    return horasTrabajo * pagoPorHora;
}

// Solicitar al usuario los datos de entrada
const nombreEmpleado = prompt("Ingresa el nombre del empleado:");
const horasTrabajo = parseFloat(prompt("Ingresa el número de horas trabajadas:"));
const pagoPorHora = parseFloat(prompt("Ingresa el pago por hora del empleado:"));

// Validar que las horas trabajadas y el pago por hora sean números válidos
if (isNaN(horasTrabajo) || isNaN(pagoPorHora) || horasTrabajo <= 0 || pagoPorHora <= 0) {
    console.log("Por favor, ingresa valores válidos para las horas trabajadas y el pago por hora.");
} else {
    // Calcular el sueldo
    const sueldo = calcularSueldo(horasTrabajo, pagoPorHora);

    // Mostrar el resultado
    console.log(`El sueldo de ${nombreEmpleado} es: $${sueldo.toFixed(2)}`);
}
