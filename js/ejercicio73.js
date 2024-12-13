// Solicitar al usuario una frase
const frase = prompt("Ingrese una frase:");

// Solicitar al usuario una letra
const letra = prompt("Ingrese una letra para buscar:");

// Validar entradas
if (!frase || frase.trim() === "" || !letra || letra.trim().length !== 1) {
    console.log("Por favor, ingrese una frase válida y una única letra.");
} else {
    // Inicializar un contador
    let contador = 0;

    // Recorrer la frase y contar las ocurrencias de la letra
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra) {
            contador++;
        }
    }

    // Mostrar el resultado
    console.log(`La letra "${letra}" aparece ${contador} veces en la frase.`);
}
