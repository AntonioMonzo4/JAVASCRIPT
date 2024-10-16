// Función para determinar si un número es primo
function esPrimo(numero) {
    var i; // Variable local para iterar
    var primo = true; // Suponemos que el número es primo

    // Casos especiales para 2 o números menores que 2
    if (numero == 2) {
        return true; // El número 2 es primo
    } else if (numero < 2) {
        return false; // Números menores que 2 no son primos
    } else if (numero % 2 == 0) {
        return false; // Números pares mayores que 2 no son primos
    } else {
        // Bucle para verificar divisibilidad de 3 hasta la raíz cuadrada del número
        for (i = 3; i <= Math.sqrt(numero); i += 2) {
            if (numero % i == 0) {
                primo = false; // No es primo si es divisible por i
                break; // Romper el bucle si ya sabemos que no es primo
            }
        }
    }
    return primo; // Retorna si el número es primo
}

// Función para comprobar si una cadena es un palíndromo
function esPalindromo(cadena) {
    cadena = cadena.toUpperCase(); // Convertir a mayúsculas para evitar diferencias por caso
    var fin = cadena.length - 1; // Posición final del array de caracteres
    var i, j;

    // Bucle para comparar caracteres desde los extremos hacia el centro
    for (i = 0, j = fin; j >= i; i++, j--) {
        if (cadena[i] != cadena[j]) {
            return false; // No es palíndromo si los caracteres no coinciden
        }
    }
    return true; // Es palíndromo si todas las comparaciones coinciden
}

var miArray = new Array(); // Array para almacenar números que son palíndromos y primos
var numero = 0;

// Bucle para verificar todos los números del 2 al 100,000
for (x = 2; x <= 100000; x++) {
    // Verificar si el número es tanto un palíndromo como un primo
    if (esPalindromo(x.toString()) && esPrimo(x)) {
        numero++; // Incrementar el contador de números que cumplen ambas condiciones
        miArray.push(x); // Añadir el número al array
    }
}
alert("El numero es : " + numero); // Mostrar la cantidad de números que cumplen las condiciones
alert(miArray.join(" ; ")); // Mostrar los números encontrados
