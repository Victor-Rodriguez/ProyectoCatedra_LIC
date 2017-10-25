//OBJETO QUE GUARDA LOS DATOS DE UNA CUENTA
var datosCuenta = {
	num_cuenta : 0,
	almacenar_datos: function(form)
	{
		var datos_cuenta = {
			banco : form.txtNomBanco.value,
			numCuenta : form.txtNumCuenta.value,
			saldoCuenta : form.txtSaldoActual.value
		};

		form.txtNomBanco.value = "";
		form.txtNumCuenta.value = "";
		form.txtSaldoActual.value = "";
		return datos_cuenta;
	}
}

function iniciar(){
	var datos_cuenta;
	var completo = false;
	var btnAgregarCuenta = document.getElementById("btnAgregarC");

	//Ingreso de los datos de una cuenta
	 if (btnAgregarCuenta.addEventListener) {
	 	btnAgregarCuenta.addEventListener("click", function(){
	 		completo = valida_ingresoCuenta(document.frmAgregar_cuenta);
	 		if (completo == true) {
	 			var conteo_tar = 0;
	 			var ingreso=[];
	 			conteo_tar = Number(localStorage.getItem("conteo_tar["+ Number(localStorage.getItem("id_usu")) +"]"));
//console.log(datos_cuenta);
	 			datos_cuenta = datosCuenta.almacenar_datos(document.frmAgregar_cuenta);
	 			//localStorage.setItem("DC",JSON.stringify(ingreso));
	 			ingreso.push(datos_cuenta);

	 			localStorage.setItem("Datos_cuenta["+ Number(localStorage.getItem("id_usu")) +"]", JSON.stringify(ingreso));
	 			//console.log(JSON.parse(localStorage.getItem("Datos_cuenta["+ Number(localStorage.getItem("id_usu")) +"]")));
	 			conteo_tar+=1;
	 			localStorage.setItem("conteo_tar["+ Number(localStorage.getItem("id_usu")) +"]",Number(conteo_tar));
	 			alert("Datos guardados");
	 		}else{
	 			alert("No ingreso correctamente los datos");
	 		}
	 	}, false);
	 }
}

function valida_ingresoCuenta(form){
	var banco = form.txtNomBanco.value;
	var numCuenta = form.txtNumCuenta.value;
	var saldoCuenta = form.txtSaldoActual.value;

	if (banco == null || banco == "" || banco.length == 0) {
		alert("Debe ingresar el nombre del Banco");
		return false;
	}
	if (numCuenta == null || numCuenta == "" || numCuenta.length == 0){
		alert("Debe ingresar el número de la Cuenta");
		return false;
	}
	if (saldoCuenta == null || saldoCuenta == "" || saldoCuenta.length == 0) {
		alert("Debe ingresar el sueldo acutual que posee");
		return false;
	}

	return true;
}


if (window.addEventListener) {
	window.addEventListener("load", iniciar, false);
}else if (window.attachEvent) {
	window.attachEvent("onload", iniciar);
}