var eleccion;
var respuestaJugador;
var acierto = 0, fallo = 0;

const preguntas = [
    { categoria: "Geografía", pregunta: "¿Cuál es la capital de Francia?", respuesta: "París" },
    { categoria: "Arte", pregunta: "¿Quién pintó la Mona Lisa?", respuesta: "Leonardo da Vinci" },
    { categoria: "Espectáculos", pregunta: "¿Quién protagonizó Titanic?", respuesta: "Leonardo DiCaprio" },
    { categoria: "Historia", pregunta: "¿En qué año llegó Colón a América?", respuesta: "1492" },
    { categoria: "Ciencias", pregunta: "¿Qué planeta es conocido como el planeta rojo?", respuesta: "Marte" },
    { categoria: "Deportes", pregunta: "¿Cuántos jugadores hay en un equipo de fútbol?", respuesta: "11" }
];

// Mostrar las preguntas 
function mostrarPreguntas() {
    console.log("Las preguntas son las siguientes: \n");

    for (var n = 0; n < preguntas.length; n++) {
        console.log((n + 1) + "- " + preguntas[n].categoria + ": " + preguntas[n].pregunta);
    }

    eleccionJugador();

}

function eleccionJugador() {
    eleccion = parseInt(prompt("Elige la pregunta que quieras contestar indicando el número: \n (Puedes verlas por consola presionando F12)"));

    if (eleccion < 1 || eleccion > preguntas.length) {
        console.log("Elige un número válido.");
    }

    respuestaJugador = prompt(preguntas[eleccion - 1].pregunta);
    acierto_fallo();
    borrarPregunta();
    mostrarPreguntas();
}

function borrarPregunta() {
    preguntas.splice(eleccion - 1, 1); // Eliminar la pregunta seleccionada del array
}

function acierto_fallo() {
    if (respuestaJugador === preguntas[eleccion - 1].respuesta) {
        acierto++;
        console.log("¡Correcto! Aciertos: " + acierto);

        if (acierto === 4) {
            console.log("Has acertado 4 preguntas. ¡Has ganado!");
            return; // Detener el juego
        }

    } else {
        fallo++;
        console.log("Incorrecto. Fallos: " + fallo);

        if (fallo === 3) {
            console.log("Has fallado 3 preguntas. Has perdido...");
            return; // Detener el juego
        }
    }
}
