// Build a game that has 4 crystals and a Random Result

// The following are global variables:

var random_result;
var lost = 0;
var win = 0;
var previous = 0;



var resetAndStart = function(){

	$(".crystals").empty();

	var images = [
			'https://vignette.wikia.nocookie.net/marvel-contestofchampions/images/1/1c/2-Star_Crystal.png/revision/latest?cb=20150825213642', 
			'http://vignette2.wikia.nocookie.net/starwars/images/5/5f/LightsaberCrystal-SWE.png/revision/latest?cb=20160911062335',
			'https://media1.britannica.com/eb-media/33/148033-004-03F1EC8C.jpg', 
			'http://thespiritscience.net/wp-content/uploads/2014/06/Crystal-1.jpg'];

	random_result = Math.floor(Math.random() * 69) + 30;


	$("#result").html('Random Result: ' + random_result);

	for(var i = 0; i < 4; i++) {

		var random = Math.floor(Math.random() * 11) + 1;
		
		var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-random": random,
			});

			crystal.css({
				"background-image":"url('" + images[i] + "')",
				"backgroun-size":"cover"


			});
			//crystal.html(random);

		$(".crystals").append(crystal);
		
	}

	$("#previous").html("Total Score: " + previous);
}

resetAndStart();


$(document).on('click', ".crystal", function () {

	var num = parseInt($(this).attr('data-random'));

	previous += num; 

	$("#previous").html("Total score: " + previous);

	console.log(previous);

	if(previous > random_result){

		lost++;

		$("#lost").html("You lost: " + lost);

		previous = 0;

		resetAndStart();
	}
	else if (previous === random_result){

		win++;

		$("#win").html("You win: " + win);

		previous = 0;

		resetAndStart();
	}

});

// Every crystal needs to be assigned a random number between 1 - 12
// When clicking each CRYSTAL, the value is added to the previous result until it equals the total score
// If it is greater than the Random Result, decrement the lost counter
// If it is equal, then increment the win counter
// A new random number should be generated and assigned to each crystal every time there's a win or lose

