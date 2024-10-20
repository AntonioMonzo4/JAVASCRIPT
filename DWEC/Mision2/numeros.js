function convertirBases() {
    // Solicitar la base en la que está el número
    const baseOrigen = prompt("Introduce la base del número (binario, decimal, octal, hexadecimal):").trim().toLowerCase();
    
    // Solicitar el número en la base indicada
    const numero = prompt(`Introduce el número en base ${baseOrigen}:`).trim();
    
    let decimal;
    // Convertir el número a decimal según la base indicada
    try {
        if (baseOrigen === "binario") {
            decimal = parseInt(numero, 2);
        } else if (baseOrigen === "decimal") {
            decimal = parseInt(numero, 10);
        } else if (baseOrigen === "octal") {
            decimal = parseInt(numero, 8);
        } else if (baseOrigen === "hexadecimal") {
            decimal = parseInt(numero, 16);
        } else {
            alert("Base no válida. Debe ser binario, decimal, octal o hexadecimal.");
            return;
        }

        if (isNaN(decimal)) {
            throw new Error("Número no válido para la base indicada.");
        }
    } catch (error) {
        alert(error.message);
        return;
    }

    // Mostrar el número en las diferentes bases
    alert(
        `Número en las diferentes bases:\n` +
        `Binario: ${decimal.toString(2)}\n` +
        `Decimal: ${decimal}\n` +
        `Octal: ${decimal.toString(8)}\n` +
        `Hexadecimal: ${decimal.toString(16).toUpperCase()}`
    );
}

// Llamar a la función para ejecutar el programa
convertirBases();
