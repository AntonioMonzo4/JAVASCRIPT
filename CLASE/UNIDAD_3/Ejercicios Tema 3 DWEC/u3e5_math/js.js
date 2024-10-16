// Función para calcular la potencia de un número dado
function potencia(base, exponente) {
    // Devuelve el resultado de elevar la base al exponente
    return Math.pow(base, exponente);
}

// Función para calcular la raíz cuadrada de un número
function raiz(numero) {
    // Devuelve la raíz cuadrada del número dado
    return Math.sqrt(numero);
}

// Función para redondear un número al entero más cercano
function redondeo(numero) {
    // Devuelve el número redondeado
    return Math.round(numero);
}

// Función para calcular las funciones trigonométricas de un ángulo
function trigonometria(numero) {
    // Devuelve una cadena con el seno, coseno y tangente del ángulo dado
    return "Seno: " + Math.sin(numero) + "<br/>Coseno: " + Math.cos(numero) + "<br/>Tangente: " + Math.tan(numero);
}

// Variable para controlar el fin del bucle
fin = false;

// Bucle que continúa solicitando una opción hasta que se elija una válida
while (!fin) {
    // Solicita al usuario que elija una opción del menú
    formato = parseInt(prompt("Elige una opción del siguiente menú:\n • 1) Potencia.\n • 2) Raíz.\n • 3) Redondeo.\n • 4) Trigonometría.\n"));
    
    // Verifica si la opción elegida es válida (entre 1 y 4)
    if (formato > 0 && formato <= 4) {
        fin = true; // Termina el bucle si la opción es válida
        
        // Ejecuta la opción seleccionada usando una estructura switch
        switch (formato) {
            case 1: // Opción 1: Potencia
                let base = prompt("Dime la base:"); // Solicita la base
                let exponente = prompt("Dime el exponente:"); // Solicita el exponente
                salida = potencia(base, exponente); // Calcula la potencia
                break;
            case 2: // Opción 2: Raíz cuadrada
                let numero = parseInt(prompt("Dime un número positivo:")); // Solicita un número positivo
                if (numero >= 0) {
                    salida = raiz(numero); // Calcula la raíz si el número es positivo
                } else {
                    salida = "No has indicado un número positivo"; // Mensaje de error si el número es negativo
                }
                break;
            case 3: // Opción 3: Redondeo
                let decimal = parseFloat(prompt("Dime un número decimal:")); // Solicita un número decimal
                if (!isNaN(decimal)) {
                    salida = redondeo(decimal); // Redondea el número si es válido
                } else {
                    salida = "No has indicado un número"; // Mensaje de error si no es un número
                }
                break;
            case 4: // Opción 4: Trigonometría
                let angulo = parseFloat(prompt("Dime un ángulo entre 0 y 360:")); // Solicita un ángulo entre 0 y 360 grados
                if (angulo >= 0 && angulo <= 360) {
                    salida = trigonometria(angulo); // Calcula las funciones trigonométricas del ángulo
                } else {
                    salida = "No has indicado un ángulo válido"; // Mensaje de error si el ángulo no está en el rango
                }
                break;
        }
        
        // Muestra el resultado de la operación seleccionada en el elemento 'destino' del HTML
        destino.innerHTML = salida;
    } else {
        fin = false; // Si la opción no es válida, continúa el bucle
    }
}
