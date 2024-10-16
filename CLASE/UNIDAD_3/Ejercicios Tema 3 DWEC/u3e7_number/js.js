// Variable para controlar el fin del bucle
fin = false;

// Bucle que continúa solicitando un número hasta que se introduzca uno válido
while (!fin) {
    // Solicita al usuario que introduzca un número
    numero = new Number(prompt("Dime un número:"));
    
    // Verifica si el valor introducido es un número válido y finito
    if (!isNaN(numero) && isFinite(numero)) {
        fin = true; // Termina el bucle si el número es válido
        
        // Convierte el número a notación exponencial y lo muestra en el elemento con id "destino1"
        salida = numero.toExponential();
        destino = document.getElementById("destino1");
        destino.innerHTML += salida;
        
        // Redondea el número a 4 decimales y lo muestra en el elemento con id "destino2"
        salida = numero.toFixed(4);
        destino = document.getElementById("destino2");
        destino.innerHTML += salida;
        
        // Convierte el número a su representación binaria y lo muestra en el elemento con id "destino3"
        salida = numero.toString(2);
        destino = document.getElementById("destino3");
        destino.innerHTML += salida;
        
        // Convierte el número a su representación octal y lo muestra en el elemento con id "destino4"
        salida = numero.toString(8);
        destino = document.getElementById("destino4");
        destino.innerHTML += salida;
        
        // Convierte el número a su representación hexadecimal y lo muestra en el elemento con id "destino5"
        salida = numero.toString(16);
        destino = document.getElementById("destino5");
        destino.innerHTML += "0x" + salida;
    } else {
        // Muestra un mensaje de error si el valor introducido no es un número válido
        alert("Introduce un número válido");
    }
}
