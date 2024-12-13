function numeroATexto(numero) {
    const numerosTexto = ["cero", "uno", "dos", "tres", "cuatro", "cinco"];
    
    if (numero >= 0 && numero <= 5) {
        return numerosTexto[numero];
    } else {
        return "Número fuera de rango"; 
    }
}


console.log(numeroATexto(0));  
console.log(numeroATexto(3));  
console.log(numeroATexto(5)); 
console.log(numeroATexto(7)); 
