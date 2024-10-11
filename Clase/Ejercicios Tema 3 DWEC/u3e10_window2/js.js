var ventana;

function nuevaVentana(){
	if(confirm("¿Desea abrir una nueva ventana?")){
		ventana = open("index.html", "_blank", "toolbar=no,menubar=no,location=no,resizable=no,top=500,left=500,width=200,height=80");
	}
}	
function cerrarVentana(){
	if(ventana.closed){
		alert("La ventana ya estaba cerrada");
	}else{
		ventana.close();
	}
}

m=document.getElementById("mostrar");
m.innerHTML="Resolucion:"+screen.width+"x"+screen.height+"<br/>URL Procedencia:"+document.referrer+"<br/>URL:"+window.location.href+"<br/>Servidor:"+window.location.hostname
	
		
		
		
		