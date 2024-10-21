function generarNombreUsuario() {
    // Solicitar información
    var entrada = prompt("Introduce tu nombre, dos apellidos y año de nacimiento: \n(Resultado en consola)");

    // Dividir la entrada en partes usando split()
    var palabras = entrada.split(" ");

    // Asignar nombre, apellidos y año de nacimiento a variables
    var nombre = palabras[0];
    var apellido1 = palabras[1];
    var apellido2 = palabras[2];
    var anioNacimiento = palabras[3];

    // Transformar a mayúsculas
    var cadenaMayus = entrada.toUpperCase();

    // Mostrar la transformación a mayúsculas
    console.log("Mayúsculas:");
    console.log(cadenaMayus);

    // Mostrar información separada
    console.log("\nInformación separada:");
    console.log("Nombre: " + nombre);
    console.log("Apellido 1: " + apellido1 + " Número de letras: " + apellido1.length);
    console.log("Apellido 2: " + apellido2 + " Número de letras: " + apellido2.length);
    console.log("Año: "+anioNacimiento);

    // Crear usuario
    var inicialN = nombre[0].toLowerCase(); 
    var inicialA = apellido2[0].toLowerCase(); 
    var usuario = inicialN+apellido1.toLowerCase()+inicialA+anioNacimiento.slice(-2);

    // Mostrar el nombre de usuario
    console.log("\nNombre de usuario:");
    console.log(usuario);
}


