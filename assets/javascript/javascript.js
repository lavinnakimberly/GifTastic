var gifArray = ["cat","bird","dog"]

for (var i = 0; i < gifArray.length; i++){
	var buttons = $("<button>");
	buttons.text(gifArray[i]);
	buttons.attr("data-animal", gifArray[i]);
	$("#buttons").append(buttons);
}

$("button").on("click", function(){
	var animalType = $(this).attr("data-animal");

	var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

     $.ajax({
       url: queryURL,
       method: "GET"
	})
    .done(function(response){
    	console.log(response)
    })
    
})


























