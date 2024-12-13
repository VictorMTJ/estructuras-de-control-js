// Función para determinar el signo zodiacal
function obtenerSignoZodiacal(mes) {
    let signo;

    // Evaluar el mes y asignar el signo zodiacal correspondiente
    if (mes === "enero" || mes === "febrero") {
        if (mes === "enero") {
            signo = "Capricornio (1 al 19) / Acuario (20 en adelante)";
        } else {
            signo = "Acuario (1 al 18) / Piscis (19 en adelante)";
        }
    } else if (mes === "marzo" || mes === "abril") {
        if (mes === "marzo") {
            signo = "Piscis (1 al 20) / Aries (21 en adelante)";
        } else {
            signo = "Aries (1 al 19) / Tauro (20 en adelante)";
        }
    } else if (mes === "mayo" || mes === "junio") {
        if (mes === "mayo") {
            signo = "Tauro (1 al 20) / Géminis (21 en adelante)";
        } else {
            signo = "Géminis (1 al 20) / Cáncer (21 en adelante)";
        }
    } else if (mes === "julio" || mes === "agosto") {
        if (mes === "julio") {
            signo = "Cáncer (1 al 22) / Leo (23 en adelante)";
        } else {
            signo = "Leo (1 al 22) / Virgo (23 en adelante)";
        }
    } else if (mes === "septiembre" || mes === "octubre") {
        if (mes === "septiembre") {
            signo = "Virgo (1 al 22) / Libra (23 en adelante)";
        } else {
            signo = "Libra (1 al 22) / Escorpio (23 en adelante)";
        }
    } else if (mes === "noviembre" || mes === "diciembre") {
        if (mes === "noviembre") {
            signo = "Escorpio (1 al 21) / Sagitario (22 en adelante)";
        } else {
            signo = "Sagitario (1 al 21) / Capricornio (22 en adelante)";
        }
    } else {
        signo = "Mes no válido. Por favor ingrese un mes válido.";
    }

    // Mostrar el resultado
    console.log("El signo zodiacal correspondiente es: " + signo);
}

// Ingresar el nombre del mes
let mes = prompt("Ingrese el nombre del mes (por ejemplo: enero, febrero, marzo...): ").toLowerCase();

// Llamar a la función para obtener el signo zodiacal
obtenerSignoZodiacal(mes);
