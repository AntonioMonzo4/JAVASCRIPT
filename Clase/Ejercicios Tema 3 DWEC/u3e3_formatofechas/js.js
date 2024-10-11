		hoy = new Date();
		
		//Se puede usar Intl en lugar de tener que crear el vector de los días.
		const dias = [		  
		  'Lunes',
		  'Martes',
		  'Miércoles',
		  'Jueves',
		  'Viernes',
		  'Sábado',
		  'Domingo'
		];
		
		const days = [		  
		  'Monday',
		  'Tuesday',
		  'Wednesday',
		  'Thursday',
		  'Friday',
		  'Saturday',
		  'Sunday'
		];
		
		fin=false;
		while(!fin){
			formato = parseInt(prompt("Indica el formato:\n • 1) 17/02/2016\n • 2) Miércoles, 17 de febrero de 2016.\n • 3) Wednesday, February17, 2016."));
			if(formato >0 && formato <=3){
				fin=true;
				switch (formato) {
				  case 1:
					salida = hoy.getDay().toString().padStart(2, '0')+"/"+(hoy.getUTCMonth()+1)+"/"+hoy.getUTCFullYear();
					break;
				  case 2:
					mesActual = new Intl.DateTimeFormat('es-ES', { month: 'long'}).format(new Date());
					salida = dias[hoy.getUTCDay()]+", "+hoy.getDay()+" de "+mesActual+" de "+hoy.getUTCFullYear();
					break;
				  case 3:
					mesActual = new Intl.DateTimeFormat('en-EN', { month: 'long'}).format(new Date());
					salida = dias[hoy.getUTCDay()]+", "+hoy.getDay()+" de "+mesActual+" de "+hoy.getUTCFullYear();
					break;					
				}
				destino.innerHTML=salida;
			}else{
				fin=false;
			}
		}

		
		
		