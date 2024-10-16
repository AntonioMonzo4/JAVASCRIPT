// Función para obtener la información del navegador actual
var getBrowserInfo = function() {
    var ua = navigator.userAgent, tem, 
    M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    
    // Comprobación específica para navegadores basados en Trident (IE)
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    
    // Comprobación para Chrome y sus derivados (Opera, Edge)
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
    
    // Devuelve el nombre y versión del navegador
    return M.join(' ');
};

// Variable para controlar el fin del bucle
fin = false;

// Bucle que continúa solicitando el nombre y apellidos del usuario hasta que se introduce algo
while (!fin) {
    // Solicita al usuario que introduzca su nombre y apellidos
    cadena = prompt("Dime tu nombre y apellidos:");
    
    // Verifica si se ha introducido una cadena no vacía
    if (cadena) {
        fin = true; // Termina el bucle si se ha introducido un valor
        
        // Divide la cadena en partes utilizando los espacios como separadores
        const partes = cadena.split(" ");
        
        let nombre = partes[0]; // Primer elemento es el nombre
        let apellido1 = partes[1]; // Segundo elemento es el primer apellido
        let apellido2 = partes[2]; // Tercer elemento es el segundo apellido
        
        // Cálculo de la longitud total sin contar los espacios
        if (getBrowserInfo().indexOf("Edge") >= 0) {
            // Para navegadores IE/Edge, se usa replace en lugar de replaceAll
            salida = cadena.replace(/ /g, "").length;
        } else {
            // En otros navegadores, se puede usar replaceAll
            salida = cadena.replaceAll(" ", "").length;
        }
        // Muestra la longitud sin espacios en el elemento con id "destino1"
        destino = document.getElementById("destino1");
        destino.innerHTML += salida;
        
        // Convierte la cadena a minúsculas y la muestra en "destino2"
        salida = cadena.toLowerCase();
        destino = document.getElementById("destino2");
        destino.innerHTML += salida;
        
        // Convierte la cadena a mayúsculas y la muestra en "destino3"
        salida = cadena.toUpperCase();
        destino = document.getElementById("destino3");
        destino.innerHTML += salida;
        
        // Muestra el nombre en el elemento con id "destino4"
        salida = nombre;
        destino = document.getElementById("destino4");
        destino.innerHTML += salida;
        
        // Muestra el primer apellido en el elemento con id "destino5"
        salida = apellido1;
        destino = document.getElementById("destino5");
        destino.innerHTML += salida;
        
        // Muestra el segundo apellido en el elemento con id "destino6"
        salida = apellido2;
        destino = document.getElementById("destino6");
        destino.innerHTML += salida;
        
        // Genera un nombre de usuario con la inicial del nombre, el primer apellido completo y la inicial del segundo apellido
        salida = nombre.charAt(0) + apellido1 + apellido2.charAt(0);
        destino = document.getElementById("destino7");
        destino.innerHTML += salida;
        
        // Genera otro nombre de usuario con las tres primeras letras del nombre, primer apellido y segundo apellido
        salida = nombre.substr(0, 3) + apellido1.substr(0, 3) + apellido2.substr(0, 3);
        destino = document.getElementById("destino8");
        destino.innerHTML += salida;
    }
}
