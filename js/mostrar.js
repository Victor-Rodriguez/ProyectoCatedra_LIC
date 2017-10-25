if(window.addEventListener){
 window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
 window.attachEvent("onload", iniciar);
}

function iniciar() {
	var muestra = document.getElementById("monto");
	var datos = JSON.parse(localStorage.getItem("Datos_bancarios["+ Number(localStorage.getItem("id_usu")) +"]"));
	muestra.innerHTML = datos.monto ;
}