

<script>
    /* Próximo en la Fila 

    En informática una cola (queue) es una estructura de datos abstracta 
    en la cual los elementos se mantienen en orden. Los nuevos elemento se pueden 
    añadir al final de la cola y los elementos previos se retiran del principio de la cola.

    Ejercicio:
    Define una función proximoEnLaFila que tome un array y un número como argumentos.
    Agrega el número al final del array y elimina el primer elemento de este. La función
    proximoEnLaFila debe retornar el elemento que fue removido.
    */

    function proximoEnLaFila(arr, elem){
        arr.push(elem); // Añade al final del array
        return arr.shift(); // Remover el primer elemento
    }

    var array = [1, 2, 3, 4, 5];

    console.log("Antes: " + JSON.stringify(array)); //Convertimos array en cadena de caracteres

    console.log(proximoEnLaFila(array), 6);

    console.log("Después: " + JSON.stringify(array));

</script>