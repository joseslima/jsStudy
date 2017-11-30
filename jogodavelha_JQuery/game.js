var round= 1;

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
		played(this.id);
	})

	function played(id){

		if( (round % 2) == 0){
			alert("Vez do player 2");
		}else{
			alert("Vez do player1");
		}

		round++;

	}


})