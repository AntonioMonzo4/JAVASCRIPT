
		fin=false;
		while(!fin){
			numero = new Number(prompt("Dime un número:"));
			if(!isNaN(numero)&&isFinite(numero)){
				fin=true;
				//Exponencial
				salida=numero.toExponential();
				destino=document.getElementById("destino1");
				destino.innerHTML+=salida;
				//4 Decimales
				salida=numero.toFixed(4);				
				destino=document.getElementById("destino2");
				destino.innerHTML+=salida;
				//Binario
				salida=numero.toString(2);
				destino=document.getElementById("destino3");
				destino.innerHTML+=salida;
				//Octal
				salida=numero.toString(8);
				destino=document.getElementById("destino4");
				destino.innerHTML+=salida;
				//Hexadecimal 
				salida=numero.toString(16);
				destino=document.getElementById("destino5");
				destino.innerHTML+="0x"+salida;
			}else{
				alert("Introduce un número válido");
			}
		}

		
		
		