// Función para reconocer cadenas entre comillas con comillas escapadas
function reconocerCadenas(input) {
    // Expresión regular para detectar cadenas entre comillas con caracteres escapados
    const regex = /"((\\.|[^"\\])*)"/g;
    
    // Buscar todas las coincidencias en el input
    const coincidencias = [...input.matchAll(regex)];
    
    // Extraer el contenido de las cadenas encontradas
    const cadenas = coincidencias.map(coincidencia => coincidencia[1]);
    
    return cadenas;
  }
  
  // Ejemplo de uso
  const texto = `Este es un "ejemplo de cadena" con comillas escapadas: \" y \\ .`;
  const resultado = reconocerCadenas(texto);
  
  // Mostrar el resultado
  console.log("Cadenas encontradas:", resultado);
  