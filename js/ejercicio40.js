// Función para calcular la edad
function calcularEdad(añoNacimiento) {
    const añoActual = new Date().getFullYear();  // Obtener el año actual
    const edad = añoActual - añoNacimiento;      // Calcular la edad
    return edad;
}

// Ejemplo de uso
const añoNacimiento = 1995;  // Año de nacimiento (puede cambiar según la persona)

// Calcular y mostrar la edad
const edad = calcularEdad(añoNacimiento);
console.log(`La persona tiene ${edad} años.`);
