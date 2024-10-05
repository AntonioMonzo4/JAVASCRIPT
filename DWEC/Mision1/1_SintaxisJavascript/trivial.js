

var preguntas=["1-Geografía: ","2-Arte","3-Espectáculos","4-Historia","5-Ciencias","6-Deporte"];
var eleccion;
var respuestas=["1","2","3","4","5","6"];
var respuestaJugador;
var acierto=0,fallo=0;

function mostrarPreguntas(){

    console.log("Las preguntas son las siguientes: \n \n")

    for(var n=0;n<preguntas.length;n++){

        console.log(preguntas[n]);
    }

    eleccionJugador();
    

}

function eleccionJugador(){

    eleccion = parseInt(prompt("Elige la pregunta que quieras contestar indicando el número: \n (Puedes verlas por consola presionando F12)"));
    respuestaJugador=(prompt(preguntas[eleccion-1]));
    acierto_fallo();
    console.log(fallo);
    

}

function acierto_fallo(){

    if(respuestaJugador===respuestas[eleccion-1]){

        acierto++;
    }else{
        fallo++;
    }
    
}