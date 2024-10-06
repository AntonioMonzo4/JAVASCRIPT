//Función para obtener el área de un triangulo
function areaTriangulo(b,a){

    return (b*a)/2;

}
//Función para obtener el perímetro de un triángulo equilatero
function perimetroTrianguloEquilatero(l){

    return l*3;

}
//Función para obtener el perímetro de un triángulo isósceles
function perimetroTriangulaIsosceles(l1,l2){

    return l1*2+l2;

}
//Función para obtener el perímetro de un triángulo escaleno
function perimetroTrianguloEscaleno(l1,l2,l3){

    return l1+l2+l3;

}
//Función para calcular el área de un cuadrado
function areaCuadrado(l){

    return Math.pow(l,2);
}
//Función para calcular el perímetro de un cuadrado
function perimetroCuadrado(l){

    return l*4;
}
//Función para calcular el área de un rectángulo
function areaRectangulo(l1,l2){

    return l1*l2;

}
//Función para obtener el área de un circulo
function areaCirculo(r){

    return Math.PI*r*r;

}
//Función para calcular la logitud de una circunferencia 
function longitudCircunferencia(r){

    return Math.PI*(2*r);

}