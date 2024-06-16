<script>

    /* Plantillas Literales 

    Características: 
    - Se usa el acento invertido (backtick) ` en lugar de comillas
    - Pueden contener comillas simples y dobles 
    - Las líneas se preservan como se escriben en el código 
    - Para reemplazar variables se escribe ${variable}
    - Dentro de ${} también puedes escribir expresiones 
    */

   var a = 4;
   console.log(`El valor de a es ${a}`)

   var array = [1,2,4,7];

   console.log(`El array es ${JSON.stringify(array)}`); //stringify convierte un valor a cadena de caracteres que sigue el formato JSON
   
   //Utilizamos notación de punto si queremos sutiruir en las plantillas literales valores pertenecientes a objetos 

   
</script>