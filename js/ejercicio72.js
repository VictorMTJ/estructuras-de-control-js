// Solicitar al usuario una palabra
const palabra = prompt("Ingrese una palabra:");

// Validar si se ingresó una palabra
if (!palabra || palabra.trim() === "") {
    console.log("Por favor, ingrese una palabra válida.");
} else {
    console.log("Letras de la palabra en orden inverso:");
    // Recorrer la palabra desde el final hasta el principio
    for (let i = palabra.length - 1; i >= 0; i--) {
        console.log(palabra[i]);
    }
}
