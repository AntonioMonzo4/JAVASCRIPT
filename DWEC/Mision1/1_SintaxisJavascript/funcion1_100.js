function numeros1_100() {
    for (var n = 1; n <= 100; n++) {
        if (n % 3 == 0) {

            continue;

        } else {

            console.log(n);

        }

    }
}

function numeros1_100_2() {
    var n = 1;
    while (n != 100) {

        if (n % 3 == 0) {
            continue;


        } else {

            console.log(n);



        }
        n++;

    }
}

function listaMeses() {
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    for (var n = 0; n < meses.length; n++) {
        if (meses[n] === "Junio" || meses[n] === "Julio" || meses[n] === "Agosto") {
            continue;
        } else {
            console.log(meses[n]);
        }
    }
}

function listaMeses2(){
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    var verano = ["Junio","Julio","Agosto"];

    for (var n = 0; n < meses.length; n++) {
        for(var i=0; i< verano.length;i++){

            if (meses[n]===verano[i]) {
                break;
            } else {
                console.log(meses[n]);
            }
        }

    }
}