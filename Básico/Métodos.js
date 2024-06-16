<script>
//Si el valor de una propiedad es una función se le denomina método 

const persona = {
  nombre: "Isabel",
  presentarse: function() {
    return `¡Hola! Mi nombre es ${this.nombre}.`;
  }
};

console.log(persona.presentarse());

// Versión ES6

const persona2 = {
  nombre: "Isabel",
  presentarse() {
    return `¡Hola! Mi nombre es ${this.nombre}.`;
  }
};

persona.presentarse();
</script>