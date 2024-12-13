function generarYVerificarParImpar() {
    const numero = Math.floor(Math.random() * 10) + 1; 
    console.log(`El número generado es: ${numero}`);
    
    if (numero % 2 === 0) {
        console.log("El número es par.");
    } else {
        console.log("El número es impar.");
    }
}


generarYVerificarParImpar();
