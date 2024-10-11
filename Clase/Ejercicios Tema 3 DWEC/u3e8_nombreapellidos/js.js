//Para saber el navegador - replaceAll no funciona en IE / Edge
var getBrowserInfo = function() {
	var ua= navigator.userAgent, tem, 
	M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
	if(/trident/i.test(M[1])){
		tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
		return 'IE '+(tem[1] || '');
	}
	if(M[1]=== 'Chrome'){
		tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
		if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
	}
	M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
	if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
	return M.join(' ');
};


fin=false;
while(!fin){
	cadena = prompt("Dime tu nombre y apellidos:");
	if(cadena){
		fin=true;
		const partes = cadena.split(" ");
		
		let nombre = partes[0];
		let apellido1 = partes[1];
		let apellido2 = partes[2];
		//Tamaño sin espacios
		//salida=nombre.length+apellido1.length+apellido2.length;
		if (getBrowserInfo().indexOf("Edge")>=0){
			salida=cadena.replace(/ /g, "").length; //replaceAll no funciona en IE / Edge
		}else{
			salida=cadena.replaceAll(" ","").length;
		}
		
		destino=document.getElementById("destino1");
		destino.innerHTML+=salida;
		//Minusculas
		salida=cadena.toLowerCase();				
		destino=document.getElementById("destino2");
		destino.innerHTML+=salida;
		//Mayúsculas
		salida=cadena.toUpperCase();				
		destino=document.getElementById("destino3");
		destino.innerHTML+=salida;
		//Nombre
		salida=nombre;
		destino=document.getElementById("destino4");
		destino.innerHTML+=salida;
		//Apellido 1
		salida=apellido1;
		destino=document.getElementById("destino5");
		destino.innerHTML+=salida;
		//Apellido 2
		salida=apellido2;
		destino=document.getElementById("destino6");
		destino.innerHTML+=salida;
		//Usuario 1
		salida=nombre.charAt(0)+apellido1+apellido2.charAt(0);
		destino=document.getElementById("destino7");
		destino.innerHTML+=salida;
		//Usuario 2
		salida=nombre.substr(0,3)+apellido1.substr(0,3)+apellido2.substr(0,3); //Principio, Nº Caracteres
		destino=document.getElementById("destino8");
		destino.innerHTML+=salida;
		
	}
}

		
		
		