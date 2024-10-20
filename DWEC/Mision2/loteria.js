function ln() {

    return Math.floor(Math.random() * 99999).toString().padStart(5, "0");

}

function quiniela() {

    var Resultado = [10];
    var partidosJugados = 0;

    while (partidosJugados < Resultado.length) {

        Resultado[partidosJugados] = Math.floor(Math.random() * 2);
        partidosJugados++;

    }


}

function primitiva() {

    var resultadoPrimitiva = [7];

    var numeros = 0;
    while (numeros < resultadoPrimitiva.length) {
        var num= Math.floor(Math.random * 49 + 1);
        
            if (!resultadoPrimitiva.includes(num)) {
                resultadoPrimitiva[numeros] =num;
                numeros++;
            } 
    
    }

}


