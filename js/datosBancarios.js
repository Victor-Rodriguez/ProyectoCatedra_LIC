//FUNCION QUE GUARDA DATOS DE datosBancarios

var datosBancarios = {
	num_cuenta : 0,
	almacenar: function(form)
	{
		var datos_bancarios = {
			monto : form.txtMonto.value,
			banco : form.txtBanco.value,
			numCuenta: form.txtNumeroCuenta.value,
			saldoActual: form.txtSaldo.value
		};

		form.txtMonto.value = "";
		form.txtBanco.value = "";
		form.txtNumeroCuenta.value = "";
		form.txtSaldo.value = "";
		return datos_bancarios; 
	}
}

function iniciar(){
	var datos_bancarios;
	var completo = false;
	var btnIngresarDatos = document.getElementById("btnIngresarDatos");

	//Ingreso de los datos bancarios

	if (btnIngresarDatos.addEventListener) {
		btnIngresarDatos.addEventListener("click", function(){
			completo = valida_ingreso(document.frmDatos);
			if (completo == true) {
				console.log(datos_bancarios);
				datos_bancarios = datosBancarios.almacenar(document.frmDatos);
				localStorage.setItem("Datos_bancarios["+ Number(localStorage.getItem("id_usu")) +"]",JSON.stringify(datos_bancarios));
				location.href="../html/indexb.html";
				console.log(JSON.parse(localStorage.getItem("Datos_bancarios")));
				alert("Datos guardados");
			}
		}, false);
	}
}


function valida_ingreso(form){
	var monto = form.txtMonto.value;
	var banco = form.txtBanco.value;
	var numCuenta = form.txtBanco.value;
	var saldoActual = form.txtSaldo.value;

	if (monto == null ||  monto == "" || monto.length == 0) {
		alert("Debe ingrear el monto");
		return false;
	}
	if (banco == null || banco == "" || banco.length == 0) {
		alert("Debe ingresar el nombre del banco");
		return false;
	}
	if (numCuenta == null || numCuenta == "" || numCuenta.length == 0) {
		alert("Debe de ingrear el número de la cuenta");
		return false;
	}
	if (saldoActual == null || saldoActual == "" || saldoActual.length == 0) {
		alert("Debe de ingresar el saldo");
		return false
	}
	return true;
}

if (window.addEventListener){
	window.addEventListener("load", iniciar,false);
}else if (window.attachEvent) {
	window.attachEvent("onload", iniciar);
}