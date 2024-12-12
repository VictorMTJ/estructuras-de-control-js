function evaluarEmpleado() {
    try {
        const puntuacion = prompt("Ingresa tu puntuación (0.0, 0.4, 0.6 o más):");

        if (!isPuntuacionValida(puntuacion)) {
            throw new Error("Por favor, ingresa una puntuación válida (0.0, 0.4, 0.6 o más).");
        }

        const puntuacionNumerica = parseFloat(puntuacion);

        let nivel = "";
        let dinero = 0;

        if (puntuacionNumerica === 0.0) {
            nivel = "Inaceptable";
            dinero = 0;
        } else if (puntuacionNumerica === 0.4) {
            nivel = "Aceptable";
            dinero = 2400 * puntuacionNumerica;
        } else if (puntuacionNumerica >= 0.6) {
            nivel = "Meritorio";
            dinero = 2400 * puntuacionNumerica;
        }

        alert(`Nivel de rendimiento: ${nivel}\nCantidad de dinero: ${dinero}€`);
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

function isPuntuacionValida(puntuacion) {
    const puntuacionesValidas = ["0.0", "0.4", "0.6"];
    return puntuacionesValidas.includes(puntuacion) || parseFloat(puntuacion) > 0.6;
}


evaluarEmpleado();