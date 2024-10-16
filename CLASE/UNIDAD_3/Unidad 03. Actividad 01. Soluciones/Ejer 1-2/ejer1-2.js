// Variables iniciales
let dinero = 25; // Saldo inicial del jugador
const fin = 150; // Meta de dinero para ganar el juego
let numeroCarasDado = 6; // Número de caras del dado (puede cambiarse a otro valor)

// Función para obtener un número aleatorio del dado
function lanzarDado(caras) {
    // Devuelve un número aleatorio entre 1 y el número de caras del dado
    return Math.floor(Math.random() * caras) + 1;
}

// Función principal del juego
function jugar() {
    // El juego continúa mientras el dinero esté entre 0 y la meta
    while (dinero > 0 && dinero < fin) {
        console.log(`Tienes ${dinero} €.`); // Muestra el saldo actual

        // Solicitar al jugador el número al que quiere apostar
        let numeroApostado = parseInt(prompt(`Apuesta a un número entre 1 y ${numeroCarasDado}:`));
        if (isNaN(numeroApostado) || numeroApostado < 1 || numeroApostado > numeroCarasDado) {
            console.log(`Número inválido. Debes apostar a un número entre 1 y ${numeroCarasDado}.`);
            continue; // Volver a pedir la apuesta si es inválida
        }

        // Solicitar la cantidad de dinero a apostar
        let cantidadApuesta = parseFloat(prompt("¿Cuánto quieres apostar?"));
        if (isNaN(cantidadApuesta) || cantidadApuesta <= 0 || cantidadApuesta > dinero) {
            console.log("Cantidad inválida. Debe ser un número positivo y no mayor a tu saldo actual.");
            continue; // Volver a pedir la apuesta si es inválida
        }

        // Lanza el dado para obtener un resultado aleatorio
        let resultadoDado = lanzarDado(numeroCarasDado);
        console.log(`El dado ha salido en ${resultadoDado}.`);

        // Verificar si el jugador ha acertado el número
        if (resultadoDado === numeroApostado) {
            dinero += cantidadApuesta * 2; // Aumenta el dinero si acierta
            console.log(`¡Acertaste! Has ganado ${cantidadApuesta * 2} €. Tu saldo actual es ${dinero} €.`);
        } else {
            dinero -= cantidadApuesta; // Reduce el dinero si falla
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
