function calcularSolsticiosEnSabado(hastaAnio) {
    var solsticiosEnSabado = [];

    // Itera desde el año 2000 hasta el año indicado por el usuario
    for (var anio = 2000; anio <= hastaAnio; anio++) {
        var fechaSolsticio = new Date(anio, 5, 21); // 21 de junio
        if (fechaSolsticio.getDay() === 6) { // Verifica si es sábado
            solsticiosEnSabado.push(anio);
        }
    }

    return solsticiosEnSabado;
}

function mostrarSolsticios() {
    // Solicita el año final con un prompt
    var hastaAnio = parseInt(prompt("Introduce el año final (mayor o igual a 2000):"));
    
    if (isNaN(hastaAnio) || hastaAnio < 2000) {
        document.getElementById("resultado").innerText = "Por favor, introduce un año válido (mayor o igual a 2000).";
        return;
    }

    const solsticiosEnSabado = calcularSolsticiosEnSabado(hastaAnio);
    const total = solsticiosEnSabado.length;

    // Muestra los resultados en el HTML
    if (total > 0) {
        document.getElementById("resultado").innerHTML = "El solsticio de verano cayó en sábado en los siguientes años: " + solsticiosEnSabado.join(", ") + ".<br>Total: " + total + " veces.";
    } else {
        document.getElementById("resultado").innerText = "No hubo solsticios de verano en sábado entre 2000 y " + hastaAnio + ".";
    }
}
