// OBJETO DE GUARDA DATOS DE NUEVOS INGRESOS

var datosIngresos = {
	num_cuenta : 0;
	almacenar_ingresos : function(form)
	{
		var datos_ingresos = {
			fecha : form.txtFecha.value,
			motivo : form.txtMotivo.value,
			monto : form.txtMonto.value,
			numCuenta_ingreso : form.txtNumCuenta.value
		};

		form.txtFecha.value = "";
		form.txtMotivo.value = "";
		form.txtMonto.value = "";
		form.txtNumCuenta.value = "";
		return datos_ingresos;
	}
}

function iniciar(){
	var datos_ingresos;
	var completo = false;
	var btnAgregarI = document.getElementById("btnAgregarI");

	if (btnAgregarI.addEventListener) {
		btnAgregarI.addEventListener("click", function(){
			completo = valida_Ingresos(document.frmIngresos);
			if (completo == true) {
				console.log(datos_ingresos);
				datos_ingresos = datosIngresos.almacenar_ingresos(document.frmIngresos);
				localStorage.setItem("Datos_ingresos", JSON.stringify(datos_ingresos));
				console.log(JSON.parse(localStorage.getItem("Datos_ingresos")));
				alert("Datos guardados")
			}else{
				alert("No ingreso correctamente los datos");
			}
		},false);
	}
}

function valida_Ingresos(form){
	var fecha = form.txtFecha.value;
	var monto = form.txtMonto.value;
	var motivo = form.txtMotivo.value;
	var numCuenta_ingreso = form.txtNumCuenta.value;

	if (fecha == null || fecha == "" || fecha.length == 0) {
		alert("Debe de ingresar una fecha");
		return false;
	}
	if (monto == null || monto == "" || monto.length == 0) {
		alert("Debe de ingresar el Monto en efectivo");
		return false;
	}
	if (numCuenta_ingreso == null || numCuenta_ingreso == "" || numCuenta_ingreso.length == 0) {
		alert("Debe de ingresar el número de Cuenta");
		return false;
	}
	if (motivo == null || motivo == "" || motivo.length == 0) {
		alert("Debe de ingresar el motivo del ingreso");
		return false;
	}
	return true;
}

if (window.addEventListener) {
	window.addEventListener("load", iniciar, false);
}else if (window.attachEvent) {
	window.attachEvent("onload", iniciar);
}

