// Variable para controlar el fin del bucle
fin = false;

// Bucle que continúa solicitando un valor para el radio hasta que se introduzca uno válido
while (!fin) {
    // Solicita al usuario que introduzca el valor del radio
    r = parseFloat(prompt("Dime el valor del radio:"));
    
    // Verifica si el valor introducido es un número válido
    if (!isNaN(r)) {
        fin = true; // Termina el bucle si el valor es válido
        
        // Redondea el radio a dos decimales y lo muestra en el elemento con id "destino1"
        salida = r.toFixed(2);
        destino = document.getElementById("destino1");
        destino.innerHTML += salida + " cm";
        
        // Calcula el diámetro (doble del radio), lo redondea a dos decimales y lo muestra en "destino2"
        diametro = r * 2;
        salida = diametro.toFixed(2);
        destino = document.getElementById("destino2");
        destino.innerHTML += salida + " cm";
        
        // Calcula el perímetro de la circunferencia (diámetro por π), lo redondea y lo muestra en "destino3"
        salida = diametro * Math.PI;
        destino = document.getElementById("destino3");
        destino.innerHTML += salida.toFixed(2) + " cm";
        
        // Calcula el área del círculo (π por el cuadrado del radio), lo redondea y lo muestra en "destino4"
        salida = Math.pow(r, 2) * Math.PI;
        destino = document.getElementById("destino4");
        destino.innerHTML += salida.toFixed(2) + " cm<sup>2</sup>";
        
        // Calcula el área de la esfera (4π por el cuadrado del radio), lo redondea y lo muestra en "destino5"
        salida = 4 * Math.pow(r, 2) * Math.PI;
        destino = document.getElementById("destino5");
        destino.innerHTML += salida.toFixed(2) + " cm<sup>2</sup>";
        
        // Calcula el volumen de la esfera ((4/3)π por el cubo del radio), lo redondea y lo muestra en "destino6"
        salida = (4 / 3) * Math.pow(r, 3) * Math.PI;
        destino = document.getElementById("destino6");
        destino.innerHTML += salida.toFixed(2) + " cm<sup>3</sup>";
    } else {
        // Muestra un mensaje de error si el valor introducido no es un número válido
        alert("Introduce un radio válido");
    }
}
