
		fin=false;
		while(!fin){
			r = parseFloat(prompt("Dime el valor del radio:"));
			if(!isNaN(r)){
				fin=true;
				//Radio
				salida=r.toFixed(2); //Math.round(r*100)/100
				destino=document.getElementById("destino1");
				destino.innerHTML+=salida+" cm";
				//Diámetro
				diametro=r*2;
				salida=diametro.toFixed(2);				
				destino=document.getElementById("destino2");
				destino.innerHTML+=salida+" cm";
				//Perímetro
				salida=diametro*Math.PI;
				destino=document.getElementById("destino3");
				destino.innerHTML+=salida.toFixed(2)+" cm";
				//Área
				salida=Math.pow(r,2)*Math.PI;
				destino=document.getElementById("destino4");
				destino.innerHTML+=salida.toFixed(2)+" cm<sup>2</sup>";
				//Área Esfera 
				salida=4*Math.pow(r,2)*Math.PI;
				destino=document.getElementById("destino5");
				destino.innerHTML+=salida.toFixed(2)+" cm<sup>2</sup>";
				//Volumen Esfera 
				salida=(4/3)*Math.pow(r,3)*Math.PI;
				destino=document.getElementById("destino6");
				destino.innerHTML+=salida.toFixed(2)+" cm<sup>3</sup>";
			}else{
				alert("Introduce un radio válido");
			}
		}

		
		
		