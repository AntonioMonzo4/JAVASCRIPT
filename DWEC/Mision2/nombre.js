function generarNombreUsuario() {
    // Solicitar la entrada del usuario en una sola línea
    const entrada = prompt("Introduce tu nombre, dos apellidos y año de nacimiento (por ejemplo: Pepe Perez Sanchez 1990):").trim();

    // Dividir la entrada en partes usando split()
    const partes = entrada.split(" ");

    // Asignar nombre, apellidos y año de nacimiento a variables
    const nombre = partes[0]; // Primer elemento es el nombre
    const apellido1 = partes[1]; // Segundo elemento es el primer apellido
    const apellido2 = partes[2]; // Tercer elemento es el segundo apellido
    const añoNacimiento = partes[3]; // Cuarto elemento es el año de nacimiento

    // Transformar la cadena completa a mayúsculas
    const cadenaMayusculas = entrada.toUpperCase();

    // Mostrar la transformación a mayúsculas
    console.log("\nTransformación a mayúsculas:");
    console.log(cadenaMayusculas);

    // Mostrar el nombre, los apellidos y el año, cada uno en una línea
    console.log("\nInformación separada:");
    console.log(`Nombre: ${nombre}`);
    console.log(`Apellido 1: ${apellido1} (Letras: ${apellido1.length})`);
    console.log(`Apellido 2: ${apellido2} (Letras: ${apellido2.length})`);
    console.log(`Año de nacimiento: ${añoNacimiento}`);

    // Crear el nombre de usuario
    const inicialNombre = nombre[0].toLowerCase(); // Inicial del nombre en minúscula
    const inicialApellido2 = apellido2[0].toLowerCase(); // Inicial del segundo apellido en minúscula
    const usuario = `${inicialNombre}${apellido1.toLowerCase()}${inicialApellido2}${añoNacimiento.slice(-2)}`; // Construcción del nombre de usuario

    // Mostrar el nombre de usuario
    console.log("\nNombre de usuario:");
    console.log(usuario);
}

// Llamar a la función para ejecutar el programa
generarNombreUsuario();
