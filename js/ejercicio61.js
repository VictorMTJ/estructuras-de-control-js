// Función para procesar las notas y contar las calificaciones
function procesarNotas() {
    // Variables para almacenar las estadísticas
    let notaAlta = -1;
    let notaBaja = 101; // La nota baja empieza mayor que la máxima posible
    let countMax = 0, countA = 0, countB = 0, countC = 0, countD = 0;
    
    // Solicitar el número de alumnos
    let numAlumnos = parseInt(prompt("Ingrese la cantidad de alumnos: "));
    
    // Ciclo para ingresar las notas de cada alumno
    for (let i = 1; i <= numAlumnos; i++) {
        let nota = parseInt(prompt(`Ingrese la nota del alumno ${i} (entre 1 y 100): `));
        
        // Validar que la nota esté en el rango válido (1-100)
        while (nota < 1 || nota > 100) {
            nota = parseInt(prompt(`Nota inválida. Ingrese la nota del alumno ${i} (entre 1 y 100): `));
        }
        
        // Actualizar la nota alta y la nota baja
        if (nota > notaAlta) {
            notaAlta = nota;
        }
        
        if (nota < notaBaja) {
            notaBaja = nota;
        }

        // Contar las calificaciones según el rango
        if (nota === 100) {
            countMax++;
        } else if (nota >= 90) {
            countA++;
        } else if (nota >= 80) {
            countB++;
        } else if (nota >= 70) {
            countC++;
        } else if (nota >= 60) {
            countD++;
        }
    }

    // Mostrar los resultados
    console.log("Nota alta: " + notaAlta);
    console.log("Nota baja: " + notaBaja);
    console.log("Cantidad de alumnos con la máxima nota (100): " + countMax);
    console.log("Cantidad de alumnos con calificación 'a' (90-100): " + countA);
    console.log("Cantidad de alumnos con calificación 'b' (80-89): " + countB);
    console.log("Cantidad de alumnos con calificación 'c' (70-79): " + countC);
    console.log("Cantidad de alumnos con calificación 'd' (60-69): " + countD);
}

// Llamar a la función para ejecutar el programa
procesarNotas();
