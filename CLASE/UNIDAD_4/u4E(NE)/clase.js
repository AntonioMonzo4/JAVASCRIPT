
class Colegio {

    constructor(nombre,numAulas){
        this.nombre=nombre;
        this.numAulas=numAulas;
        this.numAlumnos=0;
        this.todosAlumnos=new Array();
    }

    insertarAlumno(Alumno){
        this.todosAlumnos.push(Alumno);
    }

    get notaMediaC(){
        for(i=0;i<todosAlumnos.length;i++){

            notaMediaC=NotaMediaC+todosAlumnos[i].nota_media;
        }
        return this.notaMediaC;
    }


    


   
}


class Alumno {
    constructor(DNI,nombre,nnota_media) {
        this.DNI=DNI;
        this.nombre=nombre;
        this.nota_media=nnota_media;
        
    }

    get nota_media(){
        return this.nota_media;
    }

   

} 


IES= new Colegio("IES",42);

Juan=new Alumno(544,"Juan",5);
Pepa=new Alumno(543,"Pepa",7);
Pepe=new Alumno(542,"Pepe",6);
Jorge=new Alumno(514,"Jorge",8);
Pedro=new Alumno(547,"Pedro",4);

IES.insertarAlumno(Juan);
IES.insertarAlumno(Pepe);
IES.insertarAlumno(Pepa);
IES.insertarAlumno(Jorge);
IES.insertarAlumno(Pedro);

console.log(IES.notaMediaC);


