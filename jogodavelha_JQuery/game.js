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
	}


})