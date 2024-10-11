
function comprobar(){
	texto=document.getElementById("clave").value;
	let aviso = "";
	if(texto.length<8||texto.length>16){
		aviso+="La clave debe tener entre 8 y 16 caracteres<br/>";
	}
	if(!texto.match(/[A-Z]+/)){
		aviso+="La clave debe tener al menos una mayúscula<br/>";
	}
	if(!texto.match(/[a-z]+/)){
		aviso+="La clave debe tener al menos una minúscula<br/>";
	}
	if(!texto.match(/[0-9]+/)){
		aviso+="La clave debe tener al menos un número<br/>";
	}
	if(!texto.match(/[-_@#$%&]+/)){
		aviso+="La clave debe tener al menos uno de los siguientes caracteres: -_@#$%&<br/>";
	}
	if (aviso.length==0){
		document.getElementById("aviso").innerHTML="";
		document.getElementById("correcta").style.display="block";
	}else{
		document.getElementById("aviso").innerHTML=aviso;
		document.getElementById("correcta").style.display="none";
		
	}
}
