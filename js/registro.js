var Login = {
	contador:0,
	registro : function(form)
	{
		var datos={
			nombre : form.txtNombres.value,
			apellido:form.txtApellidos.value,
			correo:form.txtCorreo.value,
			nombre_us:form.txtNombreU.value,
			contra : form.txtContra2.value,
			dir: form.txtDireccion.value,
			dui:form.txtDUI.value,
			nit:form.txtNIT.value,
			cel:form.txtNumero.value,
			fecha_nac:form.txtNaciemiento.value,
			preguntas:[form.txtPregunta1.value,form.txtPregunta2.value,form.txtPregunta3.value,form.txtPregunta4.value,form.txtPregunta5.value]
		};
		form.txtNombres.value="";
		form.txtApellidos.value="";
		form.txtCorreo.value="";
		form.txtNombreU.value="";
		form.txtContra2.value="";
		form.txtDireccion.value="";
		form.txtDUI.value="";
		form.txtNIT.value="";
		form.txtNumero.value="";
		form.txtNaciemiento.value="";
		return datos;
	}


}
function iniciar(){
	var datos;
	var completo = false;	
	var btnregistrar =document.getElementById("btnRegistrar");
	var btnIngresar = document.getElementById("btnIngresar");
	//Registro de usuario
	if (btnregistrar.addEventListener)
	{
	 	btnregistrar.addEventListener("click",function(){
	 		completo = validar(document.frmRegistro);
	 		if (completo == true)
	 		{
	 			datos = Login.registro(document.frmRegistro);
	 			alert ("Datos guardados");
	 		}else{
	 			alert("No ingreso correctamente los datos");
	 		}
	 		
	 	},false);
	}else if(btnregistrar.attachEvent){
		btnregistrar.attachEvent("onclick",function(){
			completo = validar(document.frmRegistro);
	 		if (completo == true)
	 		{
	 			datos = Login.registro(document.frmRegistro);
	 			alert ("Datos guardados");
	 		}else{
	 			alert("No ingreso correctamente los datos");
	 		}
		});
	}

}

function validar(form)
{
	return true;
}









if(window.addEventListener){
 window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
 window.attachEvent("onload", iniciar);
}
