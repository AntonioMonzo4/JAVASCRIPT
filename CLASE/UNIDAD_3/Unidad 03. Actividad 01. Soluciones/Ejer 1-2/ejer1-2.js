
// Variables iniciales
let dinero = 25;
const fin = 150;
let numeroCarasDado = 6; // Número de caras del dado (puede cambiarse a cualquier otro valor)

// Función para obtener un número aleatorio del dado
function lanzarDado(caras) {
    return Math.floor(Math.random() * caras) + 1;
}

// Función principal del juego
function jugar() {
    while (dinero > 0 && dinero < fin) {
        console.log(`Tienes ${dinero} €.`);

        // Solicitar al jugador el número al que quiere apostar
        let numeroApostado = parseInt(prompt(`Apuesta a un número entre 1 y ${numeroCarasDado}:`));
        if (isNaN(numeroApostado) || numeroApostado < 1 || numeroApostado > numeroCarasDado) {
            console.log(`Número inválido. Debes apostar a un número entre 1 y ${numeroCarasDado}.`);
            continue; // Volver a pedir la apuesta
        }

        // Solicitar la cantidad de dinero a apostar
        let cantidadApuesta = parseFloat(prompt("¿Cuánto quieres apostar?"));
        if (isNaN(cantidadApuesta) || cantidadApuesta <= 0 || cantidadApuesta > dinero) {
            console.log("Cantidad inválida. Debe ser un número positivo y no mayor a tu saldo actual.");
            continue; // Volver a pedir la apuesta
        }

        // Lanza el dado
        let resultadoDado = lanzarDado(numeroCarasDado);
        console.log(`El dado ha salido en ${resultadoDado}.`);

        // Verificar si el jugador ha acertado
        if (resultadoDado === numeroApostado) {
            dinero += cantidadApuesta * 2;
            console.log(`¡Acertaste! Has ganado ${cantidadApuesta * 2} €. Tu saldo actual es ${dinero} €.`);
        } else {
            dinero -= cantidadApuesta;
            console.log(`Has fallado. Has perdido ${cantidadApuesta} €. Tu saldo actual es ${dinero} €.`);
        }
    }

    // Mensaje final del juego
    if (dinero >= fin) {
        console.log("¡Felicidades! Has alcanzado el objetivo y ganaste el juego.");
    } else {
        console.log("Lo siento, te has quedado sin dinero. El juego ha terminado.");
    }
}

// Iniciar el juego
jugar();
