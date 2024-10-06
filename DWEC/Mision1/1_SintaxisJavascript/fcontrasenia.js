function contrasenia1(){

    do{ 
        var usuario=prompt("¿Cuál fue el apellido del primer presidente de la democracia española?");

    }while(usuario!=="Suarez");
}

function contrasenia2(){

    var usuario=prompt("¿Cuál fue el primer presidente de la democracia española?");


    do{//Bucle do while que no termina hasta que el usuario escribe la respuesta correcta
        usuario=prompt("ERROR: Inténtelo de nuevo.  ¿Cuál fue el primer presidente de la democracia española?");

        while(usuario==="Adolfo"){ //Si solo escribe Adolfo

            usuario=prompt("Te falta el apellido.  ¿Cuál fue el primer presidente de la democracia española?");
        }
        while(usuario==="Suarez"){ //Si solo escribe Suarez

            usuario=prompt("Te falta el nombre.  ¿Cuál fue el primer presidente de la democracia española?");
        }
    }while(usuario!=="Adolfo Suarez");

}