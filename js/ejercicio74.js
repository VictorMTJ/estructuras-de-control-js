let entrada = ""; // Variable para almacenar la entrada del usuario

console.log("Escribe algo para que se repita. Escribe 'salir' para terminar.");

// Bucle que sigue ejecutándose hasta que el usuario escriba "salir"
while (entrada.toLowerCase() !== "salir") {
    entrada = prompt("Ingrese algo (o escriba 'salir' para finalizar):");
    
    // Verifica si la entrada no es "salir" antes de imprimir el eco
    if (entrada.toLowerCase() !== "salir") {
        console.log(`Eco: ${entrada}`);
    }
}

console.log("Has terminado el programa.");
