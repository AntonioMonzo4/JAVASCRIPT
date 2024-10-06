var base = 2;
var altura = 4;
var lado1 = 6;
var lado2 = 8;
var lado3 = 10;
var radio = 5;

function llamada() {//Función para llamar a todas las funciones del otro archivo js

    console.log(areaTriangulo(base, altura));
    console.log(perimetroTrianguloEquilatero(lado1));
    console.log(perimetroTriangulaIsosceles(lado1, lado2));
    console.log(perimetroTrianguloEscaleno(lado1, lado2, lado3));
    console.log(areaCuadrado(lado1));
    console.log(perimetroCuadrado(lado1));
    console.log(areaRectangulo(lado1, lado2));
    console.log(areaCirculo(radio));
    console.log(longitudCircunferencia(radio));

}
