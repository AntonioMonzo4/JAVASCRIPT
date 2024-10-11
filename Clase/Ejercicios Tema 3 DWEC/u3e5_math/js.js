function potencia(base, exponente){
	return Math.pow(base, exponente);
}	
function raiz(numero){
	return Math.sqrt(numero);
}

function redondeo(numero){
	return Math.round(numero);
}
function trigonometria(numero){
	return "Seno: "+Math.sin(numero)+"<br/>Coseno: "+Math.cos(numero)+"<br/>Tangente: "+Math.tan(numero);
}
		
		fin=false;
		while(!fin){
			formato = parseInt(prompt("Elige una opción del siguiente menú:\n • 1) Potencia.\n • 2) Raíz.\n • 3) Redondeo.\n • 4) Trigonometría.\n"));
			if(formato >0 && formato <=4){
				fin=true;
				switch (formato) {
				  case 1:
					let base = prompt("Dime la base:");
					let exponente = prompt("Dime el exponente:");
					salida = potencia(base, exponente);
					break;
				  case 2:
					let numero = parseInt(prompt("Dime un número positivo:"));
					if (numero>=0){
						salida = raiz(numero);
					}else{	
						salida = "No has indicado un número positivo";
					}
					break;
				  case 3:
					let decimal = parseFloat(prompt("Dime un número decimal:"));
					if (!isNaN(decimal)){
						salida = redondeo(decimal);
					}else{	
						salida = "No has indicado un número";
					}
					break;	
				case 4:
					let angulo = parseFloat(prompt("Dime un ángulo entre 0 y 360:"));
					if (angulo>=0&&angulo<=360){
						salida = trigonometria(angulo);
					}else{	
						salida = "No has indicado un ángulo válido";
					}
					break;					
				}
				destino.innerHTML=salida;
			}else{
				fin=false;
			}
		}

		
		
		