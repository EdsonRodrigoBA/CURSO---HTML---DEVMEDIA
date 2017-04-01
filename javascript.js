
/* função que valida o login com javascript */

function validaLogin(){
	
	//pega os valores digitados nos campos pelo usuario
	
	var usuario = document.getElementById("inputUsuario").value;
	var senha = document.getElementById("inputSenha").value;
	if(usuario == "" || senha == ""){
		alert("Todos os campos devem ser preenchido");
		return false; // tem que retorna false para que nao seja enviado
	}else {
		alert("Logado com sucesso");
		return true;
	}

	
	//verifica se os campos foram preenchido
	//se forem preenchido faz a submição se nao da uma mensagem de erro
	
	
}