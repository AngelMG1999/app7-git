// JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		
		$('#Izquierda').on("swipeleft",function(){
			navigator.notification.alert("Deslizo a la izquierda",function(){"Aplicacion7","Aceptar"});
			
});

$('#Derecha').on("swiperight",function(){
	navigator.notification.confirm("¿Que quiere hacer?",function(opt){
		switch(opt)
		{
			case 1:
			navigator.notification.beep(1);
			break;
			
			case 2:
			navigator.notification.vibrar(1000);
			break;
			
		}
	},"Aplicacion7","Beep,Vibrar,Cancelar");
});
	},false);
});