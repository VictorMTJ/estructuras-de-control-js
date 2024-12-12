function pedirPizza() {
    try {
        const tipoPizza = prompt("¿Deseas una pizza vegetariana? (Sí/No)").toLowerCase();

        if (tipoPizza !== "sí" && tipoPizza !== "no") {
            throw new Error("Por favor, responde con 'Sí' o 'No'.");
        }

        let ingredientes = ["Mozzarella", "Tomate"];
        let ingredienteAdicional = "";

        if (tipoPizza === "sí") {
            ingredienteAdicional = prompt("Elige un ingrediente adicional: Pimiento o Tofu").toLowerCase();
            if (ingredienteAdicional !== "pimiento" && ingredienteAdicional !== "tofu") {
                throw new Error("Por favor, elige un ingrediente válido: Pimiento o Tofu.");
            }
            ingredientes.push(ingredienteAdicional.charAt(0).toUpperCase() + ingredienteAdicional.slice(1)); 
        } else {
            ingredienteAdicional = prompt("Elige un ingrediente adicional: Pepperoni, Jamón o Salmón").toLowerCase();
            if (ingredienteAdicional !== "pepperoni" && ingredienteAdicional !== "jamón" && ingredienteAdicional !== "salmón") {
                throw new Error("Por favor, elige un ingrediente válido: Pepperoni, Jamón o Salmón.");
            }
            ingredientes.push(ingredienteAdicional.charAt(0).toUpperCase() + ingredienteAdicional.slice(1)); 
        }

        alert(`Has elegido una pizza ${tipoPizza === "sí" ? "vegetariana" : "no vegetariana"} con los siguientes ingredientes: ${ingredientes.join(", ")}`);
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
}
pedirPizza();