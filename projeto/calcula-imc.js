function calculaTodosImcs() {
	
	var trsPacientes = document.getElementsByClassName("paciente");

	percorreArray(trsPacientes, function (pacienteTr) {

		var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
		var pacienteAtual = montaPaciente(pacienteTr);

		var imc = pacienteAtual.pegaImc();
		tdImc.textContent = imc;

		console.log(imc);

	});		
}

var botao = document.getElementById("calcula-imcs");

// botao.onclick = calculaTodosImcs;
// botao.onclick = function() {
// 	console.log("Calculando Imcs");
// }

botao.addEventListener("click", calculaTodosImcs);
botao.addEventListener("click", function() {
	console.log("Calculando Imcs");
});



	
