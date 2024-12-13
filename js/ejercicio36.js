// Función para calcular los gramos de harina necesarios
function calcularHarina(cacao) {
    const harinaPorCacao = 100; // gramos de harina por cada 10 gramos de cacao
    const cacaoPor100GramosHarina = 10; // gramos de cacao por cada 100 gramos de harina
    
    // Relación de los ingredientes para calcular la cantidad de harina
    const harinaNecesaria = (harinaPorCacao * cacao) / cacaoPor100GramosHarina;
    return harinaNecesaria;
}

// Cacao que queremos utilizar
const cacao = 20; // gramos de cacao

// Calcular la cantidad de harina necesaria
const harina = calcularHarina(cacao);

// Mostrar el resultado
console.log(`Para ${cacao} gramos de cacao, se necesitan ${harina} gramos de harina.`);
