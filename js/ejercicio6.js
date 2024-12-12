function asignarGrupo() {
    try {
        const nombre = prompt("Ingresa tu nombre:").trim();
        if (!isNombreValido(nombre)) {
            throw new Error("Por favor, ingresa un nombre válido (solo letras).");
        }

        const sexo = prompt("Ingresa tu sexo (M para Mujer, H para Hombre):").trim().toUpperCase();
        if (sexo !== "M" && sexo !== "H") {
            throw new Error("Por favor, ingresa un sexo válido (M o H).");
        }

        const grupo = determinarGrupo(nombre, sexo);
        alert(`Tu grupo es: ${grupo}`);
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}

function isNombreValido(nombre) {
    return /^[a-zA-Z]+$/.test(nombre);
}

function determinarGrupo(nombre, sexo) {
    const primeraLetra = nombre.charAt(0).toUpperCase();

    if (sexo === "M" && primeraLetra < "M") {
        return "A";
    } else if (sexo === "H" && primeraLetra > "N") {
        return "A";
    } else {
        return "B";
    }
}

asignarGrupo();