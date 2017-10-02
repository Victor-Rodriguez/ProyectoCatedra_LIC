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
	},
	Ingresar:function(datos,form)
	{
		if (datos.nombre_us==form.txtUsuario.value && datos.contra==form.txtContra.value)
		{
			this.contador+=1;
			alert(datos.preguntas[0]);
			if (this.contador==1)
			{
				var cuenta="";
				cuenta+="<!DOCTYPE html>\n";
				cuenta+="<html lang=\"es\">\n";
				cuenta+="<head>\n";
				cuenta+="<title>Cuentas Bacaria</title>"
				cuenta+="<link rel='stylesheet' type='text/css' href='../css/cuenta.css'>\n";
				cuenta+="<meta charset='utf-8'>\n";
				cuenta+="</head>\n";
				cuenta+="<body>\n";
				cuenta+="<h1>Datos de Cuenta Bancaria</h1>\n";
				cuenta+="<form name='frmcuentas'>\n";
				cuenta+="<fieldset>\n";
				cuenta+="<label>Efectivo</label>\n";
				cuenta+="<input type='text' name='efectivo' id='efectivo'>\n";
				cuenta+="</fieldset>\n";
				cuenta+="<fieldset>\n";
				cuenta+="<legend>Cuentas bancarias</legend>\n";
				cuenta+="<label>Banco</label>\n";
				cuenta+="<input type='text' name='Banco'>\n";
				cuenta+="<label>Numero de cuenta</label>\n";
				cuenta+="<input type='text' name='numero_cuenta'>\n";
				cuenta+="<label>Saldo Actual</label>\n";
				cuenta+="<input type='text' name='saldo'>\n";
				cuenta+="</fieldset>\n";
				cuenta+="<input type='button' name='btnIngresar' value='Ingresar'>\n";
				cuenta+="</form>\n";
				cuenta+="</body>\n";
				cuenta+="</html>\n";
				document.write(cuenta);
			}
		}else{
			alert("Datos ingresados incorrectos");
		}
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
	//inicio de secion
	if(btnIngresar.addEventListener){
		btnIngresar.addEventListener("click",function(){
			Login.Ingresar(datos,document.frmLoign);
		},false);
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
