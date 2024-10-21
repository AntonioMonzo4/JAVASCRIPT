

function convertirBases() {
    // Solicitar la base en la que está el número
    var baseOrigen = prompt("Introduce la base del número (binario-2, decimal-10, octal-8, hexadecimal-16):").toLowerCase();

    // Solicitar el número en la base indicada
    var num = prompt("Introduce el número en base " + baseOrigen);

    var numF;
    // Convertir el número a decimal según la base indicada

    if (baseOrigen === "2") {

        numF = parseInt(num, 2);

    } else if (baseOrigen === "10") {

        numF = parseInt(num, 10);

    } else if (baseOrigen === "8") {

        numF = parseInt(num, 8);

    } else if (baseOrigen === "16") {

        numF = parseInt(num, 16);

    } else {
        alert("Base no válida. Debe ser binario, decimal, octal o hexadecimal.");
        return;
    }



    alert("Número en las diferentes bases:\n" + " Binario: "+ numF.toString(2)+ "\n Decimal: " +numF+ "\n Octal: "+ numF.toString(8)+"\n Hexadecimal: "+numF.toString(16));
}
