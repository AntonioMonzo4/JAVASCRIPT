// Función para comprobar la validez de una contraseña
function comprobar() {
	// Obtiene el valor del campo de entrada con id "clave"
	texto = document.getElementById("clave").value;
	let aviso = ""; // Variable para almacenar mensajes de error

	// Verifica que la longitud de la contraseña esté entre 8 y 16 caracteres
	if (texto.length < 8 || texto.length > 16) {
		aviso += "La clave debe tener entre 8 y 16 caracteres<br/>";
	}

	// Verifica que la contraseña contenga al menos una letra mayúscula
	if (!texto.match(/[A-Z]+/)) {
		aviso += "La clave debe tener al menos una mayúscula<br/>";
	}

	// Verifica que la contraseña contenga al menos una letra minúscula
	if (!texto.match(/[a-z]+/)) {
		aviso += "La clave debe tener al menos una minúscula<br/>";
	}

	// Verifica que la contraseña contenga al menos un número
	if (!texto.match(/[0-9]+/)) {
		aviso += "La clave debe tener al menos un número<br/>";
	}

	// Verifica que la contraseña contenga al menos uno de los caracteres especiales permitidos (-_@#$%&)
	if (!texto.match(/[-_@#$%&]+/)) {
		aviso += "La clave debe tener al menos uno de los siguientes caracteres: -_@#$%&<br/>";
	}

	// Si no se han encontrado errores, se considera que la contraseña es válida
	if (aviso.length == 0) {
		// Limpia cualquier mensaje de error anterior y muestra el mensaje de "correcta"
		document.getElementById("aviso").innerHTML = "";
		document.getElementById("correcta").style.display = "block";
	} else {
		// Si hay errores, muestra los mensajes en el elemento con id "aviso" y oculta el mensaje de "correcta"
		document.getElementById("aviso").innerHTML = aviso;
		document.getElementById("correcta").style.display = "none";
	}
}
