		hoy = new Date();
		fin = new Date(2024, 5, 24);
		
		let diferencia = fin.getTime() - hoy.getTime();
		let dias = Math.ceil(diferencia / 1000 / 60 / 60 / 24);
		let destino=document.getElementById("destino");
		
		destino.innerHTML=dias;