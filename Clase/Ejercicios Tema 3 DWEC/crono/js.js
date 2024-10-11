var horas, minutos, segundos;
var id;

function actualizar(){
	segundos = segundos+1;
	if(segundos>=60){
		segundos=0;
		minutos++;
	}
	if(minutos>=60){
		minutos=0;
		horas++;
	}
	if(horas>=24){
		horas=0;
	}
	h=document.getElementById("hora");
	m=document.getElementById("min");
	s=document.getElementById("sec");
	h.innerHTML="Hora: "+horas;
	m.innerHTML="Minutos: "+minutos.toString().padStart(2, '0');
	s.innerHTML="Segundos: "+segundos.toString().padStart(2, '0');
}	

function detener(){
	if(id){
		clearInterval(id);
		id = null;
	}
	
}

function iniciar(){
	if(!id){
		tiempo = new Date();
		horas = tiempo.getHours();
		minutos = tiempo.getMinutes();
		segundos = tiempo.getSeconds();

		id = setInterval(actualizar, 1000);
	}
	
}
		
iniciar();	
		