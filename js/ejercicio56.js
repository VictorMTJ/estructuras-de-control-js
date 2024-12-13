// Función para calcular el interés y saldo final
function calcularIntereses(saldo) {
    let interes;
    let saldoFinal;

    // Determinar el porcentaje de interés según el saldo
    if (saldo < 100000) {
        interes = saldo * 0.03;  // 3% de interés si el saldo es menor a $100,000
    } else {
        interes = saldo * 0.04;  // 4% de interés si el saldo es mayor a $100,000
    }

    // Calcular el saldo final
    saldoFinal = saldo + interes;

    // Mostrar el saldo final y el interés pagado
    console.log("Saldo inicial: $" + saldo.toFixed(2));
    console.log("Interés pagado: $" + interes.toFixed(2));
    console.log("Saldo final: $" + saldoFinal.toFixed(2));
}

// Ingresar el saldo del depósito
let saldo = parseFloat(prompt("Ingrese el saldo de su depósito: "));

// Llamar a la función para calcular el interés y saldo final
calcularIntereses(saldo);
