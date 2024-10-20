function esSolsticioEnSabado(anio) {
    const fechaSolsticio = new Date(anio, 5, 21); 
    return fechaSolsticio.getDay() === 6; 
}

function calcularSolsticiosEnSabado(hastaAnio) {
    const solsticiosEnSabado = [];

    for (let anio = 2000; anio <= hastaAnio; anio++) {
        if (esSolsticioEnSabado(anio)) {
            solsticiosEnSabado.push(anio);
        }
    }

    return solsticiosEnSabado;
}
