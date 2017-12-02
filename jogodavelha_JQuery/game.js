var round= 1;
var global_mat = [[0,0,0],[0,0,0],[0,0,0]];

$(document).ready(function(){

	$("#start_icon").click(function(){

		//validando nome dos jogadores
		if (($("#input_player1").val() == "") || ($("#input_player2").val() == "")){
			alert("Preencha o nome dos jogadores");
			return false;
		}  
		$("#player1_name").html($("#input_player1").val()); 
		$("#player2_name").html($("#input_player2").val()); 

		$("#main").hide();
		$("#board").show();
	})
	$(".played").click(function(){
		var flag= checkMat(this.id[0],this.id[2]);
		
		console.log(flag);
		if (flag== true){
			played(this.id);
		}else{
			alert("Não Pode");
			return false;
		}
		
	})

	function played(id){
		var score= 0;
		var icone= '';

		if( (round % 2) == 0){
			score= -1;
			global_mat[parseInt(id[0])][parseInt(id[2])] = score;
			icone= 'url(img/marcacao_2.png)';
		}else{
			score= 1;
			global_mat[parseInt(id[0])][parseInt(id[2])] = score;
			icone= 'url(img/marcacao_1.png)';
		}

		round++;
		$("#"+id).css("background",icone);

		console.log(global_mat);
		checkGame();
	}

	function checkMat(line,col){
		if ((global_mat[line][col]) == 0){
			return true;
		}else{
			return false;
		}
	}

	function checkGame(){
		var aux= 0;
		aux= checkDiag();	
		if (aux != 0){

			if(aux == 3){
				alert("1 ganhou");
			}else{
				alert("2 ganhou")
			}
		}else{
			aux = checkLines();
			if (aux != 0){

				if (aux == 3){
					alert("1 ganhou");
				}else{
					alert("2 ganhou");
				}
			}else{
				aux = checkColuns();
				if (aux != 0){

					if (aux == 3){
						alert("1 ganhou");
					}else{
						alert("2 ganhou");
					}
				}
			}
		}
	}
	function checkColuns(){
		return 0;
	}
	function checkLines(){
		var aux= 0;
		for (var i = 0; i < global_mat.length; i++) {
			for (var j = 0; j < global_mat.length; j++) {
				aux+= global_mat[i][j];
			}
			if ((aux==3) || (aux==-3)){
				return aux;
			}
			aux = 0;
		}
		return aux;
	}
	function checkDiag(){
		if (  (global_mat[0][0] + global_mat[1][1] + global_mat[2][2]) == 3 || (global_mat[0][2] + global_mat[1][1] + global_mat[2][0]) == 3 ) {
			return 3;
		}else{
			if ((  (global_mat[0][0] + global_mat[1][1] + global_mat[2][2]) == -3  || (global_mat[0][2] + global_mat[1][1] + global_mat[2][0]) == -3 )){
				return -1;
			}else{
				return 0;
			}
		}
	}
})