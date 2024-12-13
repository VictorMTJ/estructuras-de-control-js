// Función para verificar si el postulante cumple con los requisitos
function seleccionarJugador(edad, estatura, peso) {
    // Verificar los requisitos: edad <= 19, estatura > 175 cm, peso entre 75 y 80 kg
    if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
        console.log("El postulante cumple con los requisitos para ser seleccionado.");
    } else {
        console.log("El postulante NO cumple con los requisitos.");
    }
}

// Ingresar datos del postulante
let edad = parseInt(prompt("Ingrese la edad del postulante: "));
let estatura = parseFloat(prompt("Ingrese la estatura del postulante en cm: "));
let peso = parseFloat(prompt("Ingrese el peso del postulante en kg: "));

// Llamar a la función para verificar los requisitos
seleccionarJugador(edad, estatura, peso);
