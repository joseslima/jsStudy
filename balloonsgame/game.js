var timerId= null;		

function startingGame(){

	var url= window.location.search;

	var levelGame= url.replace("?","");
	var timeSeconds= null;


	document.getElementById("numBalloons").innerHTML= 64;
	document.getElementById("blownBalloons").innerHTML= 0;

	timeSeconds= defPlayngTime(levelGame);
	createBalloons(64);
	countTime(timeSeconds);
	
}

function countTime(seconds){

	if (seconds>0){
		seconds--;

		document.getElementById("playngTime").innerHTML= seconds;
		timerId = setTimeout("countTime("+seconds+")",1000);

	}else{
		gameOver("você perdeu");
	}
}

function gameOver(msg) {
	clearTimeout(timerId);
	alert(msg + "- Fim de Jogo");
}

function defPlayngTime(levelGame){

	if (levelGame=="1"){
		timeSeconds=120;
	}else{
		if (levelGame=="2"){
			timeSeconds=60;
		}else{
			if (levelGame=="3"){
				timeSeconds=30;
			}
		}
	}
	document.getElementById("playngTime").innerHTML= timeSeconds;
	return timeSeconds;
}


function createBalloons(numBalloons) {
	for (var i = 1; i <= numBalloons; i++) {
		var balloon= document.createElement("img");
		balloon.src="img/balao_azul_pequeno.png";
		balloon.style="margin: 10px";
		balloon.id= 'b'+i;
		balloon.onclick= function(){blown(this);}

		document.getElementById("scenario").appendChild(balloon);
	}
}

function blown(balloon){
	(document.getElementById(balloon.id)).src="img/balao_azul_pequeno_estourado.png";
	toScore();
}


function toScore(){
	var balloons = parseInt(document.getElementById("numBalloons").innerHTML);
	var blownBalloons = document.getElementById("blownBalloons").innerHTML;

	document.getElementById("numBalloons").innerHTML= balloons-1;
	document.getElementById("blownBalloons").innerHTML= parseInt(blownBalloons)+1;

	gameSituation(balloons);
}

function gameSituation(balloons){
	if (balloons==1) {
		gameOver("você ganhou");
	}
}