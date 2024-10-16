// Función para mostrar información específica extraída de una cadena de texto
function mostrar(cadena) {
    // Divide la cadena de texto en un array, separando los elementos por ":"
    cadenaPartida = cadena.split(":");

    // Muestra una alerta con el Código Postal, que se encuentra en la posición 4 del array
    alert("CP " + cadenaPartida[4]);

    // Muestra una alerta con los Apellidos, que se encuentran en la posición 1 del array
    alert("Apellidos " + cadenaPartida[1]);

    // Muestra una alerta con el Email, que se encuentra en la posición 3 del array
    alert("Email " + cadenaPartida[3]);

    // Divide el Email en dos partes, usando "@" como separador, y muestra el servidor del Email
    alert("Email servidor " + cadenaPartida[3].split("@")[1]);
}

// Solicita al usuario que introduzca una cadena de texto con el formato específico
// El formato esperado es "nombre:apellidos:telefono:email@servidor:codigopostal"
var c = prompt("Mete cadena", "nombre:apellidos:telefono:email@servidor:codigopostal");

// Llama a la función para mostrar la información extraída de la cadena introducida por el usuario
mostrar(c);
