// OBJETO DE GUARDA DATOS DE NUEVOS INGRESOS

var datosGastos = {
	num_cuenta : 0;
	almacenar_gastos : function(form)
	{
		var datos_gastos = {
			fecha : form.txtFecha.value,
			motivo : form.selectMotivo.value,
			monto : form.txtMonto.value,
			numCuenta_ingreso : form.txtNumCuenta.value
		};

		form.txtFecha.value = "";
		form.selectMotivo.value = "";
		form.txtMonto.value = "";
		form.txtNumCuenta.value = "";
		return datos_gastos;
	}
}

function iniciar(){
	var datos_gastos;
	var completo = false;
	var btnAgregarG = document.getElementById("btnAgregarG");

	if (btnAgregarG.addEventListener) {
		btnAgregarG.addEventListener("click", function(){
			completo = valida_Gastos(document.frmGastos);
			if (completo == true) {
				console.log(datos_gastos);
				datos_gastos = datosGastos.almacenar_gastos(document.frmGastos);
				localStorage.setItem("Datos_gastos", JSON.stringify(datos_gastos));
				console.log(JSON.parse(localStorage.getItem("Datos_gastos")));
				alert("Datos guardados")
			}else{
				alert("No ingreso correctamente los datos");
			}
		},false);
	}
}

function valida_Gastos(form){
	var fecha = form.txtFecha.value;
	var monto = form.txtMonto.value;s
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
	return true;
}

if (window.addEventListener) {
	window.addEventListener("load", iniciar, false);
}else if (window.attachEvent) {
	window.attachEvent("onload", iniciar);
}

