// Función para calcular el pago de acuerdo a la cantidad de cursos
function calcularPago(cursos) {
    let pagoPorCurso;

    // Si la cantidad de cursos es menor que 6
    if (cursos < 6) {
        pagoPorCurso = 2000000;  // $2.000.000 por curso
    } else {
        pagoPorCurso = 1200000;  // $1.200.000 por curso
    }

    // Calcular el pago total
    let pagoTotal = cursos * pagoPorCurso;

    // Mostrar el pago total
    console.log("El pago total por " + cursos + " curso(s) es: $" + pagoTotal);
}

// Ingresar la cantidad de cursos
let cantidadDeCursos = parseInt(prompt("Ingrese la cantidad de cursos que lleva el alumno: "));

// Llamar a la función para calcular el pago
calcularPago(cantidadDeCursos);

