// OBJETO PARA GUARDAR DATOS DE UNA TARJETA

var datosTarjeta = {
	num_tarjeta : 0,
	almacenar_tarjeta : function(form)
	{
		var datos_tarjeta = {
			banco : form.txtNomBanco.value,
			numTarjeta : form.txtNumTarjeta.value,
			saldoTarjeta : form.txtSaldoActual.value,
			interesAnual : form.txtInteres.value,
			fechaPago : form.txtFechVenci.value
		};

		form.txtNomBanco.value = "";
		form.txtNumTarjeta.value = "";
		form.txtSaldoActual.value = "";
		form.txtInteres.value = "";
		form.txtFechVenci.value = "";
		return datos_tarjeta;
	}
}

function iniciar(){
	var datos_tarjeta;
	var completo = false;
	var btnAgregarT = document.getElementById("btnAgregarT");

	// Ingreso de los datos de una Tarjeta
	if (btnAgregarT.addEventListener) {
		btnAgregarT.addEventListener("click", function(){
			completo = validaIngreso_tarjeta(document.frmAgregar_tarjeta);
			if (completo == true) {
				console.log(datos_tarjeta);
				datos_tarjeta = datosTarjeta.almacenar_tarjeta(document.frmAgregar_tarjeta);
				localStorage.setItem("Datos_tarjeta", JSON.stringify(datos_tarjeta));
				console.log(JSON.parse(localStorage.getItem("Datos_tarjeta")));
				alert("Datos guardados");
			}else{
				alert("No ingreso correctamente los datos");
			}
		}, false);
	}
}

function validaIngreso_tarjeta(form){
	var banco = form.txtNomBanco.value;
	var numTarjeta = form.txtNumTarjeta.value;
	var saldoTarjeta = form.txtSaldoActual.value;
	var interesAnual = form.txtInteres.value;
	var fechaPago = form.txtFechVenci.value;

	if (banco == null || banco == "" || banco.length == 0) {
		alert("Debe ingresar el nombre del Banco");
		return false;
	}
	if (numTarjeta == null || numTarjeta == "" || numTarjeta.length == 0) {
		alert("Debe de ingresar el número de la Tarjeta");
		return false;
	}
	if (saldoTarjeta == null || saldoTarjeta == "" || saldoTarjeta.length == 0) {
		alert("Debe de ingresar el saldo actual que posee");
		return false;
	}
	if (interesAnual == null || interesAnual == "" || interesAnual.length == 0) {
		alert("Debe de ingresar el interes");
		return false;
	}
	if (fechaPago == null || fechaPago == "" || fechaPago.length == 0) {
		alert("Debe de ingresar la fecha de pago");
		return false;
	}

	return true;
}

if (window.addEventListener) {
	window.addEventListener("load", iniciar, false);
}else if (window.attachEvent) {
	window.attachEvent("onload", iniciar);
}