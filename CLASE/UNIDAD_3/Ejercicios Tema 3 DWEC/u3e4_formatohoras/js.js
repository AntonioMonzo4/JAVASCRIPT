		//hoy = new Date();
		hoy = new Date();
		hoy.setHours(23);
		hoy.setMinutes(0);
		
		fin=false;
		while(!fin){
			formato = parseInt(prompt("Indique el formato (1 o 2):"));
			if(formato >= 1 && formato <=2){
				fin=true;
				switch (formato) {
				  case 1:
					salida = hoy.getHours().toString().padStart(2, '0')+":"+hoy.getMinutes().toString().padStart(2, '0')+":"+hoy.getSeconds().toString().padStart(2, '0');
					break;
				  case 2:
					hora=hoy.getHours();
					if(hora==12){
						partedia="PM";
					}else if(hora>=12){
						hora=hora-12;
						partedia="PM";
					}else{
						partedia="AM";
					}						
					salida = hora.toString().padStart(2, '0')+":"+hoy.getMinutes().toString().padStart(2, '0')+":"+hoy.getSeconds().toString().padStart(2, '0')+" "+partedia;
					break;				
				}
				destino.innerHTML=salida;
			}else{
				fin=false;
			}
		}

		
		
		