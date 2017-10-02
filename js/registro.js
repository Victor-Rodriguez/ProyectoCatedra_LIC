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
			preguntas:[form.txtPregunta1.value,form.txtPregunta2.value,form.txtPregunta3.value,form.txtPregunta4.value,form.txtPregunta5.value],

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
		var cuenta="";
		if (datos == null || datos == "" || datos.length == 0)
		{
			alert("Debe registrarse");
			return 0;
		}
		if (form == null || form == "" || form.length == 0)
		{
			alert("Debe ingresar los datos");
			return 0;
		}
		if (datos.nombre_us==form.txtUsuario.value && datos.contra==form.txtContra.value)
		{
			this.contador+=1;
			alert(this.contador);
			if (this.contador==1)
			{
				
				cuenta+='<!DOCTYPE html>\n';
				cuenta+='<html lang="es">\n';
				cuenta+='<head>\n';
				cuenta+='<meta charset="utf-8"/>\n';
				cuenta+='<title>Datos_Bancarios</title>\n';
				cuenta+='<link rel="stylesheet" type="text/css" href="../css/ventanamodal.css">\n';
				cuenta+='<script type="text/javascript" src = "../js/registro.js"></script>';
				cuenta+='</head>\n';
				cuenta+='<body>\n';
				cuenta+='<header>\n';
				cuenta+='<h1>Datos Bancarios</h1>\n';
				cuenta+='</header>\n';
				cuenta+='<section>\n';
				cuenta+='<h2>Necesitamos los siguientes datos</h2>\n';
				cuenta+='<form  name="frmDatos" id="frmDatos">\n';
				cuenta+='<label>Monto:</label>\n';
				cuenta+='<input type="text" name="txtMonto" id="txtMonto" class="txt1">cuenta="<br>\n';
				cuenta+='<br>\n';
				cuenta+='<label>Banco:</label>\n';
				cuenta+='<input type="text" name="txtBanco" id="txtBanco" class="txt2">\n';
				cuenta+='<br>\n';
				cuenta+='<br>\n';
				cuenta+='<label>Número de cuenta:</label>\n';
				cuenta+='<input type="text" name="txtNumeroCuenta" id="txtNumeroCuenta" class="txt3">\n';
				cuenta+='<br>\n';
				cuenta+='<br>\n';
				cuenta+='<label>Saldo actual: $</label>\n';
				cuenta+='<input type="text" name="txtSaldo" id="txtSaldo" class="txt4">\n';
				cuenta+='<br>\n';
				cuenta+='<br>\n';
				cuenta+='<input type="button" name="btnIngresarDatos" id="btnIngresarDatos" value="Ingresar datos" class="btn">\n'
				cuenta+='</form>\n';
				cuenta+='</section>\n';
				cuenta+='</body>\n';
				cuenta+='</html>\n';
				document.write(cuenta);
			}

		}else{
			alert("Datos ingresados incorrectos");
		}
	},
	DatosBancarios:function(form)
	{
		var banco={
			efectivo:form.txtMonto.value,
			nombrebanco:form.txtBanco.value,
			numcuenta:form.txtNumeroCuenta.value,
			saldo:form.txtSaldo.value
		}
		alert(banco.efectivo);
	}


}
function iniciar(){
	var datos;
	var completo = false;	
	var btnregistrar =document.getElementById("btnRegistrar");
	var btnIngresar = document.getElementById("btnIngresar");
	var btnrecuperar = document.getElementById("btnRecuperar");
	//var btnbanco = document.getElementById("btnIngresarDatos");
	//Registro de usuario
	if (btnregistrar.addEventListener)
	{
	 	btnregistrar.addEventListener("click",function(){
	 		completo = validar_reg(document.frmRegistro);
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
			completo = validar_reg(document.frmRegistro);
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

	//Ingreso de datos de banco
	/*if(btnbanco.addEventListener){
		btnbanco.addEventListener("click",function(){
			completo = validar_banco(document.frmDatos);
			if (completo == true)
			{
				Login.DatosBancarios(document.frmDatos);
			}else{
				alert("No ingreso los datos");
			}
			
		},false);
	}*/
	//----------------------------------------------------//
}

function validar_reg(form)
{
	var nombre = form.txtNombres.value;
	var apellido=form.txtApellidos.value;
	var correo=form.txtCorreo.value;
	var nombre_us=form.txtNombreU.value;
	var contra = form.txtContra2.value;
	var dir= form.txtDireccion.value;
	var dui=form.txtDUI.value;
	var nit=form.txtNIT.value;
	var cel=form.txtNumero.value;
	var fecha_nac=form.txtNaciemiento.value;
	var preguntas=[form.txtPregunta1.value,form.txtPregunta2.value,form.txtPregunta3.value,form.txtPregunta4.value,form.txtPregunta5.value];
	var val="";
	
	if (nombre == null || nombre == "" || nombre.length == 0)
	{
		alert("Debe ingresar los nombre");
		return false;
	}
	if (apellido == null || apellido == "" || apellido.length == 0)
	{
		alert("Debe ingresar los apellidos");
		return false;
	}
	val = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	if (correo == null || correo == "" || correo.length == 0)
	{
		alert("Debe ingresar el correo");
		return false;
	}else if(val.test(correo) == false)
	{
		alert("El formato del correo esta incorrecto");
		return false;
	}
	if (nombre_us == null || nombre_us == "" || nombre_us.length == 0)
	{
		alert("Debe ingresar el nombreU");
		return false;
	}
	val=/[a-z]+[A-Z]+[0-9]+\W+/;
	if (contra == null || contra == "" || contra.length == 0)
	{
		alert("Debe ingresar la contraseña");
		return false;
	}else if(contra.length < 8){
		alert("La contraseña debe contener 8 digitos");
		return false;
	}else if(val.test(contra)==false)
	{
		alert("La contraseña debe tener un formato Mm+8mxxx")
		return false;
	}
	
	if (dir == null || dir == "" || dir.length == 0)
	{
		alert("Debe ingresar la direccion");
		return false;
	}
	val = /^\d{8}-\d{1}$/;
	if (dui == null || dui == "" || dui.length == 0) {
		alert("Debe ingresar el DUI");
		return false;
	}else if(val.test(dui)==false){
		alert("El formato de DUI es incorrecto");
		return false;
	}
	val = /^[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]{1}$/;
	if (nit == null || nit == "" || nit.length == 0)
	{
		alert("Debe ingresar el NIT");
		return false;
	}else if(val.test(nit)==false){
		alert("El formato del NIT es incorrecto");
		return false;
	}
	val = /^\d{4}-\d{4}$/;
	if (cel == null || cel == "" || cel.length == 0)
	{
		alert("Debe ingresar el NIT");
		return false;
	}else if(val.test(cel)==false){
		alert("El formato del celular es incorrecto");
		return false;
	}
	if (fecha_nac == null || fecha_nac == "" || fecha_nac.length == 0)
	{
		alert("Debe ingresar la fecha de nacimiento");
		return false;
	}
	if (preguntas[0].length == 0 )
	{
		alert("Debe ingresar las preguntas");
		return false;
	}else if (preguntas[1].length == 0 )
	{
		alert("Debe ingresar las preguntas");
		return false;
	}else if (preguntas[2].length == 0 )
	{
		alert("Debe ingresar las preguntas");
		return false;
	}else if (preguntas[3].length == 0 )
	{
		alert("Debe ingresar las preguntas");
		return false;
	}else if (preguntas[4].length == 0 )
	{
		alert("Debe ingresar las preguntas");
		return false;
	}
	return true;
}


function validar_banco(form)
{

	return true;
}


if(window.addEventListener){
 window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
 window.attachEvent("onload", iniciar);
}
