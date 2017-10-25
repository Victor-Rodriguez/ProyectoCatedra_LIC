if(window.addEventListener){
 window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
 window.attachEvent("onload", iniciar);
}

function iniciar() {
	var muestra = document.getElementById("Mdatos");
	var datos = JSON.parse(localStorage.getItem("Datos_bancarios["+ Number(localStorage.getItem("id_usu")) +"]"));
	var html;
	html="<tr>\n<th>Banco</th>\n";
	html+="<th>Número de Cuenta</th>";
	html+="\n<th>Saldo Actual</th>\n</tr>";
	html+="<tr>\n<td>"+ datos.banco +"</td>";
	html+="\n<td>"+ datos.numCuenta +"</td>\n";
	html+="<td>"+ datos.saldoActual +"</td>\n</tr>";
		muestra.innerHTML = html;
}