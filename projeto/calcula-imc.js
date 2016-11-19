
var trsPacientes = document.getElementsByClassName("paciente");

percorreArray(trsPacientes, function (pacienteTr) {

	var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
	var pacienteAtual = montaPaciente(pacienteTr);

	var imc = pacienteAtual.pegaImc();
	tdImc.textContent = imc;

	console.log(imc);

});	
	
