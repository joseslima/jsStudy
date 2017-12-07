

$(document).ready(function(){
	startingGame();

	function startingGame(){

		var mat= createMat(8);
		console.log(mat);

		for (var i = 0; i < mat.length ; i++) {
			var newRow = $("<tr>");
			for (var j = 0; j < (mat[i].length) ; j++) {
				var col= $("<td>").append($("<div>").addClass("celula"));
				col.css("background", "url(img/"+mat[i][j]+".png)");
				col.css("background-size","contain");
				newRow.append(col);
			}
			$("#tabela").append(newRow);
		}
	}

	function createMat(numb_pairs){
		var array_elements= createArray(numb_pairs);
		matrix= [];
		console.log(array_elements);
		for (var i = 0; i < (numb_pairs)/2 ; i++) {
			matrix[i]= new Array();
			for (var j = 0; j < 4; j++) {
				var aux= get_randomElement(array_elements.length);
				matrix[i][j]= array_elements[aux];
				array_elements.splice(aux,1)
			}
		}
		return matrix;
	}

	function get_randomElement(max){
		return Math.floor(Math.random() * max);
	}

	function createArray(numb_pairs){
		var array = [];
		j=1
		for (var i = 0; i < (numb_pairs*2); i+=2) {
			array[i]= j;
			array[i+1]=j;
			j++;
		}
		return array;
	}

})
