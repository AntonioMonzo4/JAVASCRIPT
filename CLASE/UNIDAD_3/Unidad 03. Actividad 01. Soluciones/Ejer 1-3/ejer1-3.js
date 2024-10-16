// Función para calcular la letra correspondiente a un número de DNI
function letraDNI(numeroDni) {
    // Array con las letras posibles del DNI
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    // Retorna la letra correspondiente usando el módulo 23
    return letras[numeroDni % 23];
}

var letra = prompt("Dime la letra", "A"); // Solicitar la letra a buscar
var numero = 0; // Contador de coincidencias
var miArray = []; // Array para almacenar los números de DNI que coinciden

// Bucle para comprobar todos los números de DNI del 1 al 999
for (i = 1; i <= 999; i++) {
    // Verificar si la letra calculada coincide con la buscada
    if (letra == letraDNI(i)) {
        numero++; // Incrementar el contador si coincide
        miArray.push(i); // Añadir el número al array
    }
}
alert("hay " + numero + " dnis hasta 999 con la letra " + l); // Mostrar el número de coincidencias
alert(miArray); // Mostrar los DNIs que coinciden
