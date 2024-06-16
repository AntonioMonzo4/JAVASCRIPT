<script>

    const MI_CONSTANTE = 4; //ReadOnly es decir no se puede modificar 

    //Se ha de añadir siempre el valor no se puede declarar en otra linea y se ha de escribir en mayús para mayor limpieza de código

    //Mutar Array

    const MI_ARRAY = [1,2,3,4];

    MI_ARRAY[0] = 7; //Si que permite la modificación 

    //Crear objeto inmutable

    let colores = {
        "verde" : "#10e04b",
        "azul" : "#1b50e0",
        "negro" : "#000000"
    };

    Object.freeze(colores); //Este método impide la modificación de atributos y valores 

    colores.amarillo = "#151231"; // no se puede añadir 

</script>