		hoy = new Date();
		fin = new Date(2024, 5, 24);
		
		let diferencia = fin.getTime() - hoy.getTime();//te da el tiempo en ms desde 01/01/1970
		let dias = Math.ceil(diferencia / 1000 / 60 / 60 / 24);

		/* -ms- /1000 
		   -seg- /60
		   -min- /60
		   -hour- /24
		   -dias- 
		*/
		let destino=document.getElementById("destino");
		
		destino.innerHTML=dias;